import styled from "styled-components";
import { constants } from "../../../../helpers/constants";

interface prop {
  photoURL: string | null | undefined;
}

export const SetTop = styled.div`
  width: 100%;
  height: 120%;
  display: flex;
  flex-direction: column;
  display: center;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  gap: 10px;
  color: white;
  .welcome {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    .pic {
      display: flex;
      justify-content: flex-end;
    }
    .message {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      margin-left: 10px;
    }
  }
  .comment-checkbox {
    display: flex;
    .tool-option {
      display: flex;
      width: 100%;
      margin: 10px 0;
      justify-content: space-evenly;
      align-items: center;
      .option-text {
        font-size: 14px;
        flex: 1 1 45%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 20px;
      }
      .option-choice {
        flex: 1 1 0%;
        .accent {
          margin: 0;
        }
      }
      .checkBox {
        display: flex;
        padding: 0 5px;
        flex: 1 1 0%;
        input {
          width: 0;
          height: 0;
          visibility: hidden;
          :checked + label {
            background: #242424;
            ::after {
              transform: translateX(100%);
              background: linear-gradient(180deg, #777, #3a3a3a);
            }
          }
        }
        label {
          width: 40px;
          height: 20px;
          position: relative;
          display: block;
          background: #c9c9c9;
          border-radius: 200px;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.5s;
          overflow: hidden;
          :active:after {
            width: 23px;
          }
          :after {
            content: "";
            height: 20px;
            width: 20px;
            position: absolute;
            top: 0;
            left: 0px;
            background: linear-gradient(180deg, #cbcbcb, #ededed);
            border-radius: 180px;
            box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
              inset 0px -5px 15px rgba(255, 255, 255, 0.4);
            transition: all 0.5s;
          }
        }
      }
      .select-container {
        display: inline-flex;
        align-items: center;
        padding: 2px;
        width: 100px;
        margin: 0 10px;
        border-radius: 8px;
        background-color: ${(p) => p.theme.chatText};
        box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
        transition: box-shadow 0.2s ease-in-out;
        justify-content: center;

        .select {
          font-size: 12px;
          font-weight: 500;
          color: ${(p) => p.theme.chatBody};
          border: none;
          background-color: transparent;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          outline: none;
          cursor: pointer;
          text-align: center;

          .option {
            font-size: 14px;
            font-weight: 500;
            color: ${(p) => p.theme.chatBody};
          }
        }

        .select:focus + .select-container {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .button-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .lst {
      width: 50%;
      margin: 5px 0;
    }
  }
`;

export const Pic = styled.div<prop>`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(p) => p.photoURL});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  align-self: center;
  box-shadow: 0 0 5px white, inset 0 0 5px 2px black;
  transition: all 0.1s linear;
  :hover,
  :active {
    cursor: pointer;
  }
  :active {
    box-shadow: 0 0 5px 1px white, inset 0 0 5px 3px black;
  }
`;

type recordProps = {
  isRecording: boolean;
};
export const SideArrowButton = styled.div<recordProps>`
  color: white;
  position: absolute;
  left: 0px;
  bottom: 30px;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.5);
  :hover {
    background-color: rgb(255, 255, 255);
    color: ${constants.main_color};
  }
  .icon {
    animation: ${(p) =>
      p.isRecording ? "shrinkAndGrow 0.5s linear infinite" : "none"};
    filter: drop-shadow(11px 10px 4px rgb(0 0 0 / 4.4));
  }

  @keyframes shrinkAndGrow {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const Refresh = styled.div`
  width: 25px;
  height: 25px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgb(255, 255, 255, 0.5);
  color: white;
  border-radius: 50%;
  right: 10px;
  bottom: 35px;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    transform: rotate(-40deg);
  }
  :active {
    transform: rotate(195deg);
  }
`;

type props = {
  showOptions: boolean;
};
export const RecordOptions = styled.div<props>`
  display: flex;
  flex-direction: column;
  margin: 5px;
  color: white;
  width: 60%;
  height: 80px;
  overflow: auto;
  max-height: ${(p) => (p.showOptions ? "80px" : "0px")};
  transition: max-height 0.4s linear;
  .record-option {
    display: flex;
    align-items: center;
    width: 100%;
    .key {
      width: 40%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .value {
      width: 60%;
      margin: 4px 0;
      select {
        position: relative;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 100%;
        background-color: transparent;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 0.8rem;
        overflow: hidden;
        :focus {
          outline: none;
        }
      }
    }
  }
`;
