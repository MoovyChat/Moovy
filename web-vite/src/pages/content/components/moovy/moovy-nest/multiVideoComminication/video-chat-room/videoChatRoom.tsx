import React, { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import { SocketContext } from "../../../context/socketContextFile";
import { useAppSelector } from "../../../../../../redux/hooks";

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 50vh;
  width: 100%;
  position: absolute;
  top: 0;
  margin: auto;
  flex-wrap: wrap;
  overflow: auto;
`;

const StyledVideo = styled.video`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const Video = (props) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <StyledVideo playsInline autoPlay ref={ref} />;
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
  const socketRef = useContext(SocketContext);

  useEffect(() => {
    socketRef.on("usersWithCamera", async (users) => {
      const peers = [];
      console.log("users with camera", users);
      if (!users || users.length === 0) return;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: videoConstraints,
        audio: true,
      });
      const isUserExist = users.some((roomUser) => {
        console.log("roomUser");
        return (
          roomUser.user &&
          roomUser.user.id === user.id &&
          roomUser.isConnectedToCall
        );
      });
      if (isUserExist) {
        userVideo.current.srcObject = stream;
        streamRef.current = stream;
      }
      users.forEach((userData) => {
        const { id, isConnectedToCall } = userData;
        console.log({ userData });
        // Check if the peer already exists
        const existingPeer = peersRef.current.find((p) => p.peerID === id);
        if (existingPeer || !isConnectedToCall) {
          return; // Skip adding the peer if it already exists
        }

        const peer = createPeer(id, socketRef.id, stream);
        peersRef.current.push({
          peerID: id,
          peer,
        });
        peers.push(peer);
      });
      setPeers(() => peers);
    });
  }, []);

  useEffect(() => {
    socketRef.on("user joined", (payload) => {
      console.log("user joined");
      // Check if the peer already exists
      const existingPeer = peersRef.current.find(
        (p) => p.peerID === payload.callerID
      );
      if (existingPeer) {
        return; // Skip adding the peer if it already exists
      }
      const peer = addPeer(payload.signal, payload.callerID, streamRef.current);
      peersRef.current.push({
        peerID: payload.callerID,
        peer,
      });
      console.log("user joined", [...peers, peer]);
      setPeers((users) => [...users, peer]);
    });

    socketRef.on("receiving returned signal", (payload) => {
      console.log("receiving returned signal");
      const item = peersRef.current.find((p) => p.peerID === payload.id);
      item.peer.signal(payload.signal);
    });
  }, [streamRef.current]);

  function createPeer(userToSignal, callerID, stream) {
    console.log("Create Peer");
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      console.log("emit sending signa");
      socketRef.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    console.log("Add Peer");
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      console.log("Emit returning signal");
      socketRef.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <Container>
      <StyledVideo muted ref={userVideo} autoPlay playsInline />
      {peers.map((peer, index) => {
        return <Video key={index} peer={peer} />;
      })}
    </Container>
  );
};

export default Room;
