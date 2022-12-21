import styled, { css } from 'styled-components';

export const commentStyleMixin = () => css`
  mix-blend-mode: difference;
  color: #ffa1a1;
`;

type props = {
  isReply?: boolean;
  showEpisodeInfo?: boolean;
  showTitleInfo?: boolean;
  episodePoster?: any;
  titlePoster?: any;
  isHover?: boolean;
};
export const CardParent = styled.div<props>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99.5%;
  justify-content: space-evenly;
  align-items: ${(p) => (p.isReply ? 'flex-end' : 'center')};
  padding: 6px 0px;
  /* margin: 7px 0px; */
  border: 0.5px solid;
  background-color: transparent;
  overflow: hidden;
  /* border-radius: 10px; */
  cursor: pointer;
  :first-child {
    margin-top: 10px;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    cursor: pointer;
    filter: blur(1px);
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: fadeIn 0.6s linear forwards, scaleUp 10s linear forwards;
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
  .content {
    display: flex;
    width: 95%;
    align-items: flex-start;
    .user-pic {
      max-width: 50px;
      height: 100%;
      display: flex;
      margin-top: 5px;
      .pic-container {
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: column;
      }
    }
    .message {
      display: block;
      padding-left: 15px;
      width: calc(100% - 50px);
      flex-direction: column;
      justify-content: center;
      .username {
        display: flex;
        flex-direction: column;
        .container {
          display: flex;
          align-items: center;
          .user {
            font-weight: 600;
            font-size: 0.9em;
          }
          .time {
            display: flex;
            justify-content: center;
            height: 80%;
            align-items: flex-end;
            font-weight: 400;
            font-size: 0.5em;
            margin-left: 5px;
          }
        }
        .isReply {
          font-weight: 400;
          font-size: 0.7em;
          .ru {
            color: #00ff99;
            font-weight: 600;
            :hover {
              text-decoration: underline;
            }
          }
        }
        .movie {
          display: flex;
          font-size: 0.5rem;
          font-weight: 600;
          margin: 5px 0;
          .name {
            position: relative;
            width: fit-content;
            block-size: fit-content;
            padding: 5px 8px;
            border-radius: 10px;
            color: #ffffff;
            overflow: hidden;
            :hover {
              text-decoration: underline;
              text-decoration-color: white;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
          .title {
            background: linear-gradient(90deg, #f0fc00 50%, #c2c92c 0)
              var(--_p, 100%) / 200% no-repeat;
            color: black;
            margin-right: 6px;
            transition: 1s;
            :hover {
              --_p: 0%;
              text-decoration: underline;
              text-decoration-color: black;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
          .episode {
            background: linear-gradient(90deg, #1095c1 50%, #77acbd 0)
              var(--_p, 100%) / 200% no-repeat;
            color: black;
            transition: 1s;
            :hover {
              --_p: 0%;
              text-decoration: underline;
              text-decoration-color: black;
              text-decoration-thickness: 1px;
              cursor: pointer;
            }
          }
        }
      }
      .msg {
        font-size: 1em;
        font-weight: 400;
        padding: 2px 0;
        font-weight: normal;
        overflow: auto;
        height: 180px;
        max-height: ${(p) => (p.isHover ? '180px' : '30px')};
        transition: max-height 1s;
        white-space: pre-line;
        .time,
        .user {
          ${commentStyleMixin()};
          :hover {
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 2px;
          }
        }
      }
    }
  }

  .options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    .c {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      flex: 1 0 50%;
      padding: 5px 0;
      .icon {
        margin-right: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      .count {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 40%;
        font-size: 0.8em;
      }
    }
  }
`;

export const ReplyWindow = styled.div<props>`
  overflow: auto;
  width: 90%;
  position: relative;
  align-self: flex-end;
  border-left: 0.3px solid;
`;

export const MovieInfoParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: white;
  .title {
    font-size: 1.1rem;
    font-weight: 700;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .parent {
    font-size: 0.6rem;
    font-weight: 600;
    margin: 4px 0;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .group {
    display: flex;
    flex-wrap: wrap;
    .year,
    .runtime {
      padding: 5px 10px;
      border-radius: 3px;
      border: 1px solid #d01323;
      margin: 2px;
    }
  }
  .synopsis {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .a {
      font-size: 1rem;
      font-weight: 600;
    }
    .b {
      margin-top: 5px;
      font-size: 0.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .stats {
    display: flex;
    margin: 5px 0;
    .likes,
    .comments,
    .views {
      display: flex;
      margin: 3px 5px;
      justify-content: center;
      align-items: center;
      .count {
        font-weight: 600;
        margin-right: 2px;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const SpoilerTag = styled.span`
  filter: blur(2px);
  background-color: red;
  color: white;
  transition: filter 0.2s linear;
  margin: 0 5px;
  border-radius: 5px;
  padding: 1px 4px;
  cursor: pointer;
  :hover {
    filter: none;
  }
`;
