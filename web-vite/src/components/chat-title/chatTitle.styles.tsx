import styled from "styled-components";
import { rotate, wiggle } from "../../pages/content/styles/keyframes";

type props = {
  platform?: boolean;
};
export const ChatTitleParent = styled.div<props>`
  opacity: 1;
  text-align: center;
  font-size: 1.3em;
  word-wrap: break-word;
  font-weight: bold;
  font-family: inherit;
  padding: 20px 10px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .moovychat-fav {
    visibility: ${(p) => (p.platform ? "hidden" : "visible")};
    pointer-events: ${(p) => (p.platform ? "none" : "auto")};
  }
  .common {
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

      .fav-box {
        position: relative;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
  }
  .exit {
    grid-area: 1 / 1 / 2 / 2;
  }
  .moovychat-logo {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .wiggle {
    animation: ${wiggle} 0.5s linear;
  }
  .title {
    grid-area: 1 / 3 / 2 / 9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  .icon {
    grid-area: 1 / 9 / 2 / 11;
    .star {
      :hover {
        animation: ${rotate} 1s ease-in-out reverse;
        transform: scale(1.05);
      }
      :active {
        transform: scale(0.95);
      }
    }
  }
`;
