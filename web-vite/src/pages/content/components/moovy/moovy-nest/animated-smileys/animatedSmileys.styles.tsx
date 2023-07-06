import styled from "styled-components";

export const StyledAnimatedSmileys = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .animated-smiley {
    height: 30px;
    box-shadow: 0 0 3px;
    border-radius: 50%;
    padding: 5px;
    transition: all 0.5s;
    :hover {
      cursor: pointer;
      box-shadow: 0 0 6px;
      transform: scale(1.2);
    }
    img {
      height: 30px;
    }
  }
`;
