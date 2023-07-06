import styled from "styled-components";

type mBoxProps = {
  isReply: boolean;
};
export const ChatTextBox = styled.div<mBoxProps>`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  z-index: 8;
  width: 98%;
  height: 96%;
  transition: all 0.5s;
  border: 1px solid;
  border-radius: 40px;
  border-color: ${(p) => p.isReply && "#ca0d00"};
  box-shadow: 0 0 10px ${(p) => p.isReply && "#ca0d00"};
  .smiley {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 2px;
    .icon {
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const MessageBoxParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  outline: none;
`;

export const TextAreaIcon = styled.div`
  position: relative;
  flex-basis: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin: 10px 5px;
`;

export const TextAreaPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  font-weight: bold;
  flex-basis: 10%;
  font-size: 13px;
  color: inherit;
  border-radius: 10px;
  gap: 10px;
  .smiley-window {
    cursor: pointer;
  }
  .giphy-gif {
    :hover {
      cursor: pointer;
      filter: drop-shadow(0 0 15px white);
    }
  }
  .text-send {
    svg {
      stroke-width: 10px;
      stroke: white;
      mix-blend-mode: exclusion;
    }
    :hover {
      cursor: pointer;
      filter: drop-shadow(0 0 15px white);
    }
  }
`;

export const ReplyTo = styled.div`
  padding: 1px 5px;
  background-color: inherit;
  display: flex;
  width: 90%;
  background-blend-mode: screen;
  margin: 0 5px;
  font-size: 1.2rem;
  justify-content: space-between;
  font-weight: 700;
  .close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0px 5px;
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
  }
`;
