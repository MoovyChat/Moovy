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
  overflow-y: auto;
  overflow-x: hidden;
  .child {
    padding: 20px;
    width: 99%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
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
      .title {
        padding: 10px;
      }
      .wn-suggestions {
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

      .emojis,
      .donate,
      .socials {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
      .donate {
        .patreon {
          display: flex;
          .logo {
            width: 100px;
            cursor: pointer;
            img {
              width: 100%;
              object-fit: contain;
            }
          }
        }
      }
      .emoji-child {
        flex: 1 0 20%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .socials {
        .tiktok,
        .discord,
        .twitter,
        .instagram {
          :hover {
            cursor: pointer;
            transform: scale(1.5);
            transition: transform 0.5s linear;
          }
        }
        .tiktok {
          .icon {
            filter: drop-shadow(1px 1px 0px red);
          }
        }
      }
      .spoiler {
        .tag {
          font-weight: 700;
          font-size: 1.2em;
          margin: 10px;
          padding: 5px;
          border: 1px solid;
          display: flex;
          justify-content: center;
          align-items: center;
          /* box-shadow: 0px 3px 5px 0px ${(p) => p.theme.text}; */
          :hover {
            cursor: pointer;
            transform: scale(1.05);
            transition: transform 0.5s;
          }
          :active {
            box-shadow: inset 0px 3px 5px 0px ${(p) => p.theme.text};
          }
        }
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
