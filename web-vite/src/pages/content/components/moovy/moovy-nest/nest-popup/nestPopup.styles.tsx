import styled from "styled-components";
import { NEST_TYPE } from "../../../../../../helpers/enums";

type Props = {
  isGiphy: boolean;
};
export const StyledNestPopUp = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => (p.isGiphy ? "flex-start" : "center")};
  align-items: center;
  z-index: 1;
  .logo {
    position: absolute;
    top: 40px;
    img {
      width: 140px;
      object-fit: contain;
    }
  }
`;

interface SelectedElementProps {
  nestType: string;
}
export const SelectedElementWrapper = styled.div<SelectedElementProps>`
  height: ${({ nestType }) => (nestType === NEST_TYPE.GIPHY ? "100%" : "auto")};
  display: ${({ nestType }) =>
    nestType === NEST_TYPE.GIPHY ? "flex" : "auto"}; ;
`;
