import styled from 'styled-components';

type props = {
  movieBg?: string;
  titleBg?: string;
  showEpisodeInfo?: boolean;
  showTitleInfo?: boolean;
  isReply?: boolean;
  cardHeight?: string;
  showMore?: boolean;
};
export const CommentThreadParent = styled.div<props>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .cc {
      width: 90%;
      margin: 10px 20px;
    }
    .comment-container {
      position: relative;
      /* top: ${p => (p.isReply ? '27%' : '8%')}; */
      display: flex;
      width: 90%;
      flex-direction: column;
      .inner {
        position: relative;
        width: 100%;
        height: 100%;
        .comment-usr-detail {
          display: flex;
          align-items: center;
          .user-container {
            display: flex;
            width: 50%;
            height: 100px;
            align-items: center;
            padding-left: 20px;
            .user {
              width: 55px;
              height: 55px;
            }
            .name {
              padding: 10px;
              font-size: 1.1em;
              font-weight: 550;
            }
          }
          .options-container {
            display: flex;
            width: 50%;
            height: 100px;
            align-items: center;
            justify-content: flex-end;

            .follow {
              padding: 0 10px;
            }
            .option {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              margin-right: 20px;
              width: 30px;
              height: 30px;
              position: relative;
              .option-icon {
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
              }
              .option-window {
                position: absolute;
                z-index: 10;
                width: 180px;
                height: 200px;
                top: 45px;
                right: 0px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 0.8em;
                align-items: center;
                box-shadow: 0px 0px 5px, 0px 0px 3px 1px;
                background: ${p => p.theme.body};
                .opo {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: 10px;
                  padding: 10px 0;
                  width: 98%;
                  .opo-icon {
                    flex: 1 1 20%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                  }
                  .opo-text {
                    flex: 1 1 80%;
                  }
                  :hover {
                    background-color: ${p => p.theme.hoverColor};
                    color: white;
                  }
                }
                .delete {
                  color: #f8021f;
                }
                ::before {
                  content: ' ';
                  position: absolute;
                  top: -6px;
                  right: 10px;
                  width: 0;
                  height: 0;
                  pointer-events: none;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                  border-bottom: 5px solid;
                }
              }
              :hover {
                cursor: pointer;
                background-color: #ffffff2c;
                box-shadow: 0 0 5px;
              }
              :active {
                background-color: #ffffffa2;
              }
            }
          }
        }

        .comment-usr-msg {
          padding-left: 20px;
          /* max-height: 60%; */
          .cm-us-xt {
            width: 100%;
            font-size: 1.3em;
            padding-bottom: 10px;
            max-height: ${p => (p.showMore ? p.cardHeight : '200px')};
            overflow: hidden;
            transition: all 0.4s;
            white-space: pre-line;
            .time,
            .user {
              color: ${p => p.theme.mention};
              :hover {
                cursor: pointer;
                text-decoration: underline;
                text-underline-offset: 2px;
              }
            }
          }
          .show-more {
            font-weight: 600;
            font-size: 12px;
            color: ${p => p.theme.mention};
            text-decoration: underline;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
        .comment-usr-time {
          padding-left: 20px;
          opacity: 0.8;
          font-weight: 600;
          font-size: 0.7em;
        }
        .comment-usr-stats {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-around;
          border-top: 0.3px solid;
          border-bottom: 0.3px solid;
          margin: 10px 0;
          .cus {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;
            margin: 5px 0;
            .icon {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 18px 0 0 18px;
              box-shadow: 0 0 2px;
              cursor: pointer;
              padding: 2px 10px 2px 10px;
              :hover {
                background-color: ${p =>
                  p.theme.themeType === 'light' ? ' #c4c4c4' : ' #343434'};
              }
              :active {
                background-color: ${p =>
                  p.theme.themeType === 'light' ? ' #aeaeae' : ' #535353'};
              }
            }
            .count {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 0.75em;
              font-weight: 600;
              padding: 5px 10px;
              border-radius: 0 18px 18px 0;
              box-shadow: 0 0 2px;
              cursor: pointer;
              :hover {
                background-color: ${p =>
                  p.theme.themeType === 'light' ? ' #c4c4c4' : ' #343434'};
              }
              :active {
                background-color: ${p =>
                  p.theme.themeType === 'light' ? ' #aeaeae' : ' #535353'};
              }
            }
          }
          .likes {
            svg {
              :hover {
                color: red;
              }
            }
          }
        }

        .movie-chips {
          display: flex;
          font-size: 0.5rem;
          font-weight: 600;
          margin: 5px 15px;
          .name {
            width: fit-content;
            block-size: fit-content;
            padding: 5px 8px;
            border-radius: 10px;
            color: #ffffff;
            background-color: #a42525;
            :hover {
              text-decoration: underline;
              text-decoration-color: white;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
          .title {
            background-color: #2c4bc9;
            color: white;
            margin-right: 6px;
            :hover {
              text-decoration: underline;
              text-decoration-color: black;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
        }
        .show-details {
          position: relative;
          font-size: 0.8em;
          font-weight: normal;
          overflow: hidden;
          border-radius: 10px;
          padding: ${p =>
            p.showEpisodeInfo || p.showTitleInfo ? '10px' : '0px'};
          height: 300px;
          max-height: ${p =>
            p.showEpisodeInfo || p.showTitleInfo ? '180px' : '0px'};
          transition: max-height 1s;
          .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            opacity: 0.5;
            cursor: pointer;
            filter: blur(1px);
            z-index: -1;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              animation: fadeIn 0.6s linear forwards,
                scaleUp 10s linear forwards;
            }
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            @keyframes scaleUp {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(1.2);
              }
            }
          }
        }
        .comment-replies {
          width: 100%;
          height: auto;
          .no-data {
            width: 80%;
            text-align: center;
            margin: 60px;
            font-size: 1.1em;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

type ButtonProps = {
  color: string;
  isFollowingUser?: boolean;
};
export const StyledButton = styled.div<ButtonProps>`
  padding: 10px 20px;
  font-size: 0.9em;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background-color: ${p => p.color};
  :hover {
    cursor: pointer;
    background-color: ${p => (p.isFollowingUser ? 'transparent' : p.color)};
    box-shadow: ${p => p.isFollowingUser && 'inset 0 0 2px red'};
    color: ${p => p.isFollowingUser && 'red'};
  }
`;

export const HeaderText = styled.div`
  font-size: 1em;
  font-weight: 700;
`;
