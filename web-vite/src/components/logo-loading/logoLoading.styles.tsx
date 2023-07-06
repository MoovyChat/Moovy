import styled, { keyframes } from "styled-components";

export const StyledSplashScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 99vw;
  height: 99vh;
  gap: 15px;

  .common {
    position: absolute;
    top: 10px;
    left: 10px;
    gap: 5px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 1px white;
    border-radius: 10px;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    filter: drop-shadow(0 0 1px ${(p) => p.theme.text});
    box-shadow: inset 0 0 1px ${(p) => p.theme.text};
    color: ${(p) => p.theme.text};
    .fav-count {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .box {
        position: relative;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .fetch-movie {
    padding: 8px 15px;
    border-radius: 18px;
    font-size: 1.4em;
    box-shadow: 0 0 4px, inset 0 0 3px;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 5px, inset 0 0 5px;
    }
  }
  .loading {
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const HintText = styled.p`
  color: #2f3640; // A modern dark gray
  background-color: hsla(228, 22%, 95%, 0.62); // A light, subtle gray
  padding: 15px 20px;
  border-radius: 5px;
  border-left: 5px solid #1abc9c; // A bright, modern turquoise for emphasis
  margin-top: 20px;
  font-size: 14px; // A bit larger for readability
  line-height: 1.6; // Space out the lines of text a bit for readability
  animation: 1s ${fadeIn} ease-out;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
  max-width: 500px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 6px 0 hsla(0, 0%, 0%, 0.11);
  }
`;
