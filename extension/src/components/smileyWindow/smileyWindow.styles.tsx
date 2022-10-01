import styled from 'styled-components';

export const SmileyWindowParent = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 99%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 15;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .child {
    padding: 10px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .section {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;
      animation: slideFromTop 0.3s linear forwards;
      .suggestions {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .word {
          font-weight: 700;
          font-size: 1.2em;
          :hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: transform 0.5s;
          }
        }
      }
      .emojis {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    }
  }

  @keyframes slideFromTop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Spoiler = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  .spoiler-tag {
    padding: 3px 0px;
    width: 60px;
    margin: 0px 5px;
    font-weight: bolder;
    text-align: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      cursor: pointer;
    }
    :active {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
