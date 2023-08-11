import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SocketContext } from "../../../context/socketContextFile";
import { useAppSelector } from "../../../../../../redux/hooks";
import { Container, StyledVideo } from "./videoChatRoom.styles";
import Draggable from "react-draggable";
import { openSnackBar } from "../../nest-popup/snack-bar/snackBar";

type Props = {
  index: number;
  peer: any;
};

const Video: React.FC<Props> = ({ index, peer }) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return (
    <Draggable>
      <StyledVideo
        id="video-container"
        playsInline
        autoPlay
        ref={ref}
        index={index + 1}
      />
    </Draggable>
  );
};

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const Room = () => {
  const [peers, setPeers] = useState([]);
  const user = useAppSelector((state) => state.user);
  const userVideo = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const peersRef = useRef([]);
  const roomId = useAppSelector((state) => state.socket.roomId);
  const socket = useContext(SocketContext);
  const accessCamera = useAppSelector((state) => state.socket.accessCamera);

  // Handles when an offer is received from the broadcaster
  useEffect(() => {
    socket.on("receive-offer", async ({ offer, peerId }) => {
      const peerConnection = new RTCPeerConnection({
        iceServers: [
          {
            urls: "stun:stun.stunprotocol.org",
          },
        ],
      });
      peerConnection.ontrack = (event) => {
        // Handle the new stream...
      };
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(offer)
      );
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit("send-answer", {
        answer: peerConnection.localDescription,
        peerId,
      });
    });
  }, [socket]);

  // Handles when an answer is received from a viewer
  useEffect(() => {
    socket.on("receive-answer", ({ answer, peerId }) => {
      const peerConnection = peersRef.current.find(
        (p) => p.peerId === peerId
      )?.peerConnection;
      if (peerConnection) {
        peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
      }
    });
  }, [socket]);

  // Initialize broadcasting
  useMemo(() => {
    if (accessCamera && socket) {
      navigator.mediaDevices
        .getUserMedia({
          video: videoConstraints,
          audio: true,
        })
        .then((stream) => {
          userVideo.current.srcObject = stream;
          streamRef.current = stream;

          // Notify the server and other users in the room about the broadcast
          socket.emit("initiate-broadcast", roomId);

          socket.on("user-list", (users) => {
            const newPeers = users.map((user) => {
              const peerConnection = new RTCPeerConnection({
                iceServers: [
                  {
                    urls: "stun:stun.stunprotocol.org",
                  },
                ],
              });
              stream
                .getTracks()
                .forEach((track) => peerConnection.addTrack(track, stream));
              const peer = {
                peerId: user.id,
                peerConnection,
              };
              peersRef.current.push(peer);
              return peer;
            });

            Promise.all(
              newPeers.map((peer) => {
                return peer.peerConnection
                  .createOffer()
                  .then((offer) =>
                    peer.peerConnection.setLocalDescription(offer)
                  )
                  .then(() => {
                    socket.emit("send-offer", {
                      offer: peer.peerConnection.localDescription,
                      toUserId: peer.peerId,
                    });
                  });
              })
            );

            setPeers([...peers, ...newPeers]);
          });
        });
    }
  }, [accessCamera, socket]);

  return (
    <Container>
      <Draggable>
        <StyledVideo
          id="video-container"
          muted
          ref={userVideo}
          autoPlay
          playsInline
          index={0}
        />
      </Draggable>
    </Container>
  );
};

export default Room;
