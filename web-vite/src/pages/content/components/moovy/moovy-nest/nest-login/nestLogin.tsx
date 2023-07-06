import React, { useContext, useEffect } from "react";
import { GiNestBirds, GiNestedEclipses } from "react-icons/gi";
import { NEST_TYPE } from "../../../../../../helpers/enums";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../redux/slices/nestSlice";
import { SocketContext } from "../../context/socketContextFile";
import EmptyPage from "../../empty-page/emptyPage";
import MoovyNest from "../moovyNest";
import NestPopUp from "../nest-popup/nestPopUp";
import { StyledNestButton, StyledNestLogin } from "./nestLogin.styles";
import { MOOVY_NEST_GIF } from "../../../../../../helpers/constants";
import NestCard from "../nest-card/nestCard";

interface NestLoginProps {
  ref: any;
}
const NestLogin: React.FC<NestLoginProps> = ({ ref }) => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie);
  const popUpVisible = useAppSelector((state) => state.nest.visible);
  const isJoinedRoom = useAppSelector((state) => state.socket.joinedRoom);
  const socket = useContext(SocketContext);
  const nests = useAppSelector((state) => state.nest.nests);

  useEffect(() => {
    socket && socket.emit("getNests");
  }, [socket]);

  const onCreateClickHandler = () => {
    dispatch(sliceSetNestVisibility(true));
    dispatch(sliceSetNestType(NEST_TYPE.CREATE));
  };

  const onJoinClickHandler = () => {
    dispatch(sliceSetNestVisibility(true));
    dispatch(sliceSetNestType(NEST_TYPE.JOIN));
  };

  return (
    <React.Fragment>
      {isJoinedRoom ? (
        <MoovyNest></MoovyNest>
      ) : (
        <StyledNestLogin ref={ref}>
          <EmptyPage
            msg="Welcome to MoovyNest"
            src={MOOVY_NEST_GIF}
            className="nest-gif-logo"
          />
          <div className="button-container">
            <StyledNestButton
              nestColor="#02b66a"
              nestHover="#049358"
              nestActive="#036c41"
              size={16}
              height={50}
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
              height={50}
            >
              <GiNestedEclipses size={20} />
              <div>Join Nest</div>
            </StyledNestButton>
          </div>
          <div className="public-nests">
            <div className="public-nests-heading">Public Nests</div>
            <div className="public-nests-list">
              {nests.length === 0
                ? "No Public Nests available"
                : nests.map((nest) => <NestCard nest={nest} />)}
            </div>
          </div>
        </StyledNestLogin>
      )}
      {popUpVisible && <NestPopUp />}
    </React.Fragment>
  );
};

export default NestLogin;
