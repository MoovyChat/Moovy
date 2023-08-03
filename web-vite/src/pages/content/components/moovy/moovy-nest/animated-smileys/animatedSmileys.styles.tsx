import styled from "styled-components";

export const StyledAnimatedSmileys = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  .animated-smiley {
    min-height: 40px;
    box-shadow: 0px 0px 3px;
    border-radius: 50%;
    padding: 5px;
    transition: all 0.5s ease 0s;
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
