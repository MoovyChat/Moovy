import styled from "styled-components";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .iframe-container {
    margin-top: 40px;
  }
  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    .line {
      -webkit-box-flex: 1;
      flex-grow: 1;
      width: 100px;
      height: 1px;
      background-color: rgb(255 255 255);
    }

    .text {
      margin: 0px 10px;
      font-size: 16px;
      font-weight: bold;
      color: rgb(255 255 255);
    }
  }

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
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .refetch {
    padding: 10px 15px;
    border-radius: 18px;
    box-shadow: 0 0 4px, inset 0 0 3px;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 5px, inset 0 0 5px;
    }
  }
  .text {
    padding: 15px 20px;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    opacity: 0.8;
    text-align: center;
  }
  .err {
    color: #781313;
  }
`;

export const StyledIFrameButton = styled.iframe`
  border: none;
  width: 195px;
  height: 40px;
  display: flex;
  border-radius: 12px;
`;
