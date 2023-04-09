import styled, { css } from 'styled-components';

import { animateHeart } from '../../utils/keyframes';

const commentStyleMixin = () => css`
  color: ${p => p.theme.mention};
`;

type props = {
  isReply?: boolean;
  showEpisodeInfo?: boolean;
  showTitleInfo?: boolean;
  episodePoster?: any;
  titlePoster?: any;
  isHover?: boolean;
  cardHeight?: string;
  showMore?: boolean;
};
export const CardParent = styled.div<props>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99%;
  min-height: 120px;
  justify-content: space-evenly;
  align-items: ${p => (p.isReply ? 'flex-end' : 'center')};
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  font-size: 15px;
  border-top: 0.3px solid #8f8f8f81;
  :nth-last-child(3) {
    border-bottom: 0.3px solid #8f8f8f81;
  }
  :first-child {
    margin-top: 10px;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    filter: blur(1px);
    z-index: -1;
    filter: blur(2px) brightness(0.8);
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
    font-size: 14px;
    padding-top: 10px;
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
      padding-bottom: 10px;
      .show-more {
        font-weight: 600;
        font-size: 12px;
        color: ${p => p.theme.mention};
        text-decoration: underline;
      }
      .username {
        display: flex;
        flex-direction: column;
        .container {
          display: flex;
          align-items: center;
          .user {
            font-weight: 800;
          }
          .time {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 80%;
            font-weight: 600;
            font-size: 0.7em;
            margin-left: 5px;
            opacity: 0.6;
          }
        }
        .isReply {
          font-weight: 400;
          font-size: 0.7em;
          .ru {
            color: ${p => p.theme.mention};
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
            background: linear-gradient(90deg, #2c4bc9 50%, #445ec4 0)
              var(--_p, 100%) / 200% no-repeat;
            color: white;
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
            background: linear-gradient(90deg, #a42525 50%, #af540f 0)
              var(--_p, 100%) / 200% no-repeat;
            color: white;
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
        font-weight: 600;
        font-weight: normal;
        overflow: hidden;
        margin: 10px 0;
        max-height: ${p =>
          p.showMore ? p.cardHeight : p.isHover ? '200px' : '100px'};
        transition: max-height 0.5s;
        white-space: pre-line;
        .message-box {
        }
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
    padding-bottom: 10px;
    font-weight: 600;
    .delete {
      color: #e80d2d;
    }
    .replies {
      .icon {
        :hover {
          svg {
          }
        }
      }
    }
    .likes {
      .icon {
        svg {
          animation: ${animateHeart} 0.3s linear forwards;
          :hover {
          }
        }
      }
    }
    .c {
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
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
    span {
      display: inline-block;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .parent {
    font-size: 0.6rem;
    font-weight: 600;
    margin: 4px 0;
    span {
      display: inline-block;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .group {
    display: flex;
    flex-wrap: wrap;
    .year,
    .runtime {
      padding: 5px 10px;
      border-radius: 3px;
      border: 1px solid ${p => p.theme.border};
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
  .stats-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .stats {
      display: flex;
      margin: 5px 0;

      .history {
        .icon {
          margin-right: 5px;
        }
        .count {
          font-size: 10px;
        }
      }
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
      .likes {
        .icon {
          svg {
            animation: ${animateHeart} 0.3s linear forwards;
            :hover {
            }
          }
        }
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
