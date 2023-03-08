import { constants } from '../../../constants';
import styled from 'styled-components';

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
      p.isRecording ? 'shrinkAndGrow 0.5s linear infinite' : 'none'};
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
  max-height: ${(p) => (p.showOptions ? '80px' : '0px')};
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
