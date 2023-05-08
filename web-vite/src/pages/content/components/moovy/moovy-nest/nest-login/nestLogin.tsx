import React, { useContext, useEffect, useState } from "react";
import {
  AvailableNest,
  StyledNestButton,
  StyledNestLogin,
} from "./nestLogin.styles";
import EmptyPage from "../../empty-page/emptyPage";
import NestPopUp from "../nest-popup/nestPopUp";
import { GiNestBirds, GiNestedEclipses } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../helpers/enums";
import MoovyNest from "../moovyNest";
import { SocketContext } from "../../context/socketContextFile";
import {
  sliceSetJoinedRoom,
  sliceSetRoomId,
} from "../../../../../redux/slices/socket/socketSlice";
import { batch } from "react-redux";
import { openSnackBar } from "../nest-popup/snack-bar/snackBar";

interface AvailableRoom {
  roomId: string;
  roomName: string;
}

interface NestLoginProps {
  ref: any;
}
const NestLogin: React.FC<NestLoginProps> = ({ ref }) => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie);
  const popUpVisible = useAppSelector((state) => state.nest.visible);
  const isJoinedRoom = useAppSelector((state) => state.socket.joinedRoom);
  const socket = useContext(SocketContext);
  const [nests, setNests] = useState<AvailableRoom[]>([]);

  useEffect(() => {
    socket.emit("getNests");
    socket.on("nestsList", (roomsList) => {
      setNests(roomsList);
    });
  }, []);
  const onCreateClickHandler = () => {
    dispatch(sliceSetNestVisibility(true));
    dispatch(sliceSetNestType(NEST_TYPE.CREATE));
  };

  const onJoinClickHandler = () => {
    dispatch(sliceSetNestVisibility(true));
    dispatch(sliceSetNestType(NEST_TYPE.JOIN));
  };

  const joinRoomHandler = (roomId: string) => {
    batch(() => {
      dispatch(sliceSetRoomId(roomId));
      dispatch(sliceSetJoinedRoom(true));
      dispatch(sliceSetNestVisibility(false));
      dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
    });
    openSnackBar(`Joined the Nest`);
  };

  return (
    <React.Fragment>
      {isJoinedRoom ? (
        <MoovyNest></MoovyNest>
      ) : (
        <StyledNestLogin ref={ref}>
          <EmptyPage msg="Welcome to MoovyNest" />
          <div className="button-container">
            <StyledNestButton
              nestColor="#02b66a"
              nestHover="#049358"
              nestActive="#036c41"
              size={16}
              onClick={onCreateClickHandler}
            >
              <GiNestBirds size={20} />
              <div>Create Nest</div>
            </StyledNestButton>
            <StyledNestButton
              nestColor="#fb005c"
              nestHover="#bb0246"
              nestActive="#880233"
              size={16}
              onClick={onJoinClickHandler}
            >
              <GiNestedEclipses size={20} />
              <div>Join Nest</div>
            </StyledNestButton>
          </div>
          <div className="public-nests">
            <div className="public-nests-heading">
              Public Nests for '{movie.name}'
            </div>
            <div className="public-nests-list">
              {nests.length === 0
                ? "No Public Nests available for this episode"
                : nests.map((nest) => (
                    <AvailableNest>
                      <div>
                        <GiNestBirds size={20} />
                      </div>
                      <div>{nest.roomName}</div>
                      <StyledNestButton
                        nestColor="#fb005c"
                        nestHover="#bb0246"
                        nestActive="#880233"
                        size={10}
                        onClick={() => joinRoomHandler(nest.roomId)}
                      >
                        <div>Join</div>
                      </StyledNestButton>
                    </AvailableNest>
                  ))}
            </div>
          </div>
          {popUpVisible && <NestPopUp />}
        </StyledNestLogin>
      )}
    </React.Fragment>
  );
};

export default NestLogin;
