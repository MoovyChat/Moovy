import React, { useCallback } from "react";
import { StyledNestPopUp } from "./nestPopup.styles";
import { useAppSelector } from "../../../../../redux/hooks";
import CreateNest from "./createNest/createNest";
import { NEST_TYPE } from "../../../../../../helpers/enums";

const NestPopUp = () => {
  const nestType = useAppSelector((state) => state.nest.type);
  const SelectedElement = useCallback(() => {
    switch (nestType) {
      case NEST_TYPE.CREATE:
        return <CreateNest />;
      case NEST_TYPE.JOIN:
        return <div></div>;
      default:
        return (
          <div>
            <div>Unrecognized selection</div>
            <div>Please report this bug to us</div>
          </div>
        );
    }
  }, [nestType]);
  return (
    <StyledNestPopUp>
      <SelectedElement />
    </StyledNestPopUp>
  );
};

export default NestPopUp;
