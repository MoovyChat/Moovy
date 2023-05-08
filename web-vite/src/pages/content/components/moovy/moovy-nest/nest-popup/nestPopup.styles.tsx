import styled from "styled-components";

export const StyledNestPopUp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    position: absolute;
    top: 40px;
    img {
      width: 140px;
      object-fit: contain;
    }
  }
`;
