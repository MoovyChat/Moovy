import styled from "styled-components";

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
