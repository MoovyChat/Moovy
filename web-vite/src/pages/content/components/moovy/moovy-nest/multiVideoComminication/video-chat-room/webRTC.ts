import { useContext } from "react";
import Peer from "simple-peer";
import { SocketContext } from "../../../context/socketContextFile";
import { Socket } from "socket.io-client";
import { User } from "../../../../../../../helpers/interfaces";

type SignalData = {
  type?: "offer" | "answer" | "pranswer";
  sdp?: string;
  candidate?: {
    candidate: string;
    sdpMid: string;
    sdpMLineIndex: number;
  };
};

export const createPeer = (
  userToSignal: string,
  callerID: string,
  stream: MediaStream,
  socket: Socket<any, any>
): Peer.Instance => {
  console.log("Create Peer");
  console.log({ stream });
  const peer = new Peer({
    initiator: true,
    trickle: false,
    stream,
  });

  peer.on("signal", (signal) => {
    console.log("emit sending signal");
    socket.emit("sending signal", {
      userToSignal,
      callerID,
      signal,
    });
  });
  socket.on("acknowledge", (data) => {
    console.log("createPeer: acknowledge");
    peer.signal(data);
  });
  // Add a "stream" event handler
  peer.on("stream", (peerStream: MediaStream) => {
    console.log("createPeer: stream");
    // This is where you would handle the stream from the peer.
    // For example, you could add it to a video element:
    const element = document.querySelector("watch-video--player-view");
    console.log({ element });
    if (element) {
      const videoElement = document.createElement("video");
      videoElement.srcObject = peerStream;
      element.appendChild(videoElement);
      videoElement.play();
    }
  });

  return peer;
};

export const addPeer = (
  incomingSignal: SignalData,
  callerID: string,
  stream: MediaStream,
  socket: Socket<any, any>
) => {
  const peer = new Peer({
    initiator: false,
    trickle: false,
    stream,
  });

  // signal, callerID -> data
  peer.on("signal", (signal: SignalData) => {
    console.log("emit acknowledge");
    socket.emit("acknowledge", { signal, callerID });
  });

  peer.signal(incomingSignal);

  socket.on("acknowledge", (data) => {
    console.log("addPeer: acknowledge");
    peer.signal(data);
  });
  // Add a "stream" event handler
  peer.on("stream", (peerStream: MediaStream) => {
    console.log("addPeer: stream");
    // This is where you would handle the stream from the peer.
    // For example, you could add it to a video element:
    const element = document.querySelector("watch-video--player-view");
    if (element) {
      const videoElement = document.createElement("video");
      videoElement.srcObject = peerStream;
      element.appendChild(videoElement);
      videoElement.play();
    }
  });

  return peer;
};
