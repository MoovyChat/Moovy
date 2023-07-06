import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SocketContext } from "../../../context/socketContextFile";
import { useAppSelector } from "../../../../../../redux/hooks";
import { Container, StyledVideo } from "./videoChatRoom.styles";
import Draggable from "react-draggable";
import { addPeer, createPeer } from "./webRTC";
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
  const roomID = useAppSelector((state) => state.socket.roomId);
  const socket = useContext(SocketContext);
  const accessCamera = useAppSelector((state) => state.socket.accessCamera);

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
          socket.emit("user started sharing", user.id); // Emit the event to the server
        });
    }
  }, [accessCamera, socket]);

  useEffect(() => {
    if (socket && user)
      socket.on("user started sharing", (userSocket) => {
        if (userSocket.user.id === user.id) {
          return;
        }
        const existingPeer = peersRef.current.find(
          (p) => p.peerID === userSocket.id
        );
        if (existingPeer) {
          // If a peer connection to this user already exists, we don't need to do anything
          return;
        }
        openSnackBar(`${userSocket.user.nickname} started sharing camera`);
        console.log({ userSocket });
        const peer = createPeer(
          userSocket.id,
          socket.id,
          streamRef.current,
          socket
        );
        peersRef.current.push({
          peerID: userSocket.id,
          peer,
        });
        setPeers((peers) => [...peers, peer]);
      });
  }, [socket]);

  useEffect(() => {
    if (socket) {
      function handleUserJoined({ signal, callerID }) {
        console.log("handleUserJoined");
        const existingPeer = peersRef.current.find(
          (p) => p.peerID === callerID
        );
        if (existingPeer) {
          // If a peer connection to this user already exists, we don't need to do anything
          return;
        }
        // (TODO) HERE streamRef.current should be received from server
        const peer = addPeer(signal, callerID, streamRef.current, socket);
        peersRef.current.push({
          peerID: callerID,
          peer,
        });

        setPeers((peers) => [...peers, peer]);
      }

      socket && socket.on("user joined", handleUserJoined);
    }
  }, [socket]);

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
      {peers.map((peer, index) => {
        return <Video key={index} peer={peer} index={index} />;
      })}
    </Container>
  );
};

export default Room;
