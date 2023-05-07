import { useContext } from "react";
import { SocketContext } from "../../context/socketContextFile";
import Peer from "simple-peer";
import io from "socket.io-client";

export interface WebRTCManager {
  joinRoom: (roomID: string) => void;
}

export const createWebRTCManager = (
  onStream: (stream: MediaStream) => void,
  onPeerStream: (peerStream: MediaStream, peerID: string) => void
): WebRTCManager => {
  const socket = useContext(SocketContext);
  const peersRef = new Map<string, Peer.Instance>();

  const createPeer = (
    userToSignal: string,
    callerID: string,
    stream: MediaStream
  ): Peer.Instance => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socket.emit("sending signal", { userToSignal, callerID, signal });
    });

    peer.on("stream", (peerStream) => {
      onPeerStream(peerStream, userToSignal);
    });

    return peer;
  };

  const addPeer = (
    incomingSignal: Peer.SignalData,
    callerID: string,
    stream: MediaStream
  ): Peer.Instance => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socket.emit("returning signal", { signal, callerID });
    });

    peer.on("stream", (peerStream) => {
      onPeerStream(peerStream, callerID);
    });

    peer.signal(incomingSignal);

    return peer;
  };

  const joinRoom = async (roomID: string): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      onStream(stream);
      socket.emit("join room", roomID);

      socket.on("all users", (users: string[]) => {
        users.forEach((userID) => {
          const peer = createPeer(userID, socket.id, stream);
          peersRef.set(userID, peer);
        });
      });

      socket.on(
        "user joined",
        (payload: { signal: Peer.SignalData; callerID: string }) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.set(payload.callerID, peer);
        }
      );

      socket.on(
        "receiving returned signal",
        (payload: { id: string; signal: Peer.SignalData }) => {
          const peer = peersRef.get(payload.id);
          if (peer) {
            peer.signal(payload.signal);
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return { joinRoom };
};
