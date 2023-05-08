import { useCallback } from "react";
import { StyledNestPopUp } from "./nestPopup.styles";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import CreateNest from "./create-nest/createNest";
import { NEST_TYPE } from "../../../../../../helpers/enums";
import EmptyPage from "../../empty-page/emptyPage";
import { FULL_LOGO_TRANSPARENT } from "../../../../../../helpers/constants";
import JoinNest from "./join-nest/joinNest";

const NestPopUp = () => {
  const nestType = useAppSelector((state) => state.nest.type);
  const SelectedElement = useCallback(() => {
    switch (nestType) {
      case NEST_TYPE.CREATE:
        return <CreateNest />;
      case NEST_TYPE.JOIN:
        return <JoinNest />;
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
      <div className="logo">
        <img src={FULL_LOGO_TRANSPARENT} alt="Moovy" />
      </div>
      <SelectedElement />
    </StyledNestPopUp>
  );
};

export default NestPopUp;
