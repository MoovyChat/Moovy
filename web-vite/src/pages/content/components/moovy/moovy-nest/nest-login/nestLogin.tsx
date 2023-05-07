import React from "react";
import { StyledNestButton, StyledNestLogin } from "./nestLogin.styles";
import EmptyPage from "../../empty-page/emptyPage";
import NestPopUp from "../nest-popup/nestPopUp";
import { GiNestBirds, GiNestedEclipses } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../helpers/enums";

interface NestLoginProps {
  ref: any;
}
const NestLogin: React.FC<NestLoginProps> = ({ ref }) => {
  const dispatch = useAppDispatch();
  const popUpVisible = useAppSelector((state) => state.nest.visible);
  const onCreateClickHandler = () => {
    dispatch(sliceSetNestVisibility(true));
    dispatch(sliceSetNestType(NEST_TYPE.CREATE));
  };

  return (
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
        >
          <GiNestedEclipses size={20} />
          <div>Join Nest</div>
        </StyledNestButton>
      </div>
      <div className="public-nests">No Public Nests Available!</div>
      {popUpVisible && <NestPopUp />}
    </StyledNestLogin>
  );
};

export default NestLogin;
