import { useCallback, useEffect, useRef } from "react";
import { MOOVY_NEST_GIF } from "../../../../../../helpers/constants";
import { NEST_TYPE } from "../../../../../../helpers/enums";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import CreateNest from "./create-nest/createNest";
import Giphy from "./giphy/giphy";
import JoinNest from "./join-nest/joinNest";
import ListUsers from "./list-users/listUsers";
import { SelectedElementWrapper, StyledNestPopUp } from "./nestPopup.styles";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../redux/slices/nestSlice";
import NestSettings from "./nest-settings/nestSettings";

const NestPopUp = () => {
  const nestType = useAppSelector((state) => state.nest.type);
  const wrapperRef = useRef(null);
  const dispatch = useAppDispatch();

  const SelectedElement = useCallback(() => {
    switch (nestType) {
      case NEST_TYPE.CREATE:
        return <CreateNest />;
      case NEST_TYPE.JOIN:
        return <JoinNest />;
      case NEST_TYPE.LIST_USERS:
        return <ListUsers />;
      case NEST_TYPE.GIPHY:
        return <Giphy />;
      case NEST_TYPE.SETTINGS:
        return <NestSettings />;
      default:
        return (
          <div>
            <div>Unrecognized selection</div>
            <div>Please report this bug to us</div>
          </div>
        );
    }
  }, [nestType]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        nestType !== NEST_TYPE.GIPHY &&
        nestType !== NEST_TYPE.CREATE &&
        nestType != NEST_TYPE.JOIN
      ) {
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <StyledNestPopUp isGiphy={nestType === NEST_TYPE.GIPHY}>
      {nestType !== NEST_TYPE.GIPHY && (
        <div className="logo">
          <img src={MOOVY_NEST_GIF} alt="Moovy" />
        </div>
      )}
      <SelectedElementWrapper ref={wrapperRef} nestType={nestType}>
        <SelectedElement />
      </SelectedElementWrapper>
    </StyledNestPopUp>
  );
};

export default NestPopUp;
