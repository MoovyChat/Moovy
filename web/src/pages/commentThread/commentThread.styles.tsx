import styled from 'styled-components';

type props = {
  movieBg?: string;
  titleBg?: string;
  showEpisodeInfo?: boolean;
  showTitleInfo?: boolean;
};
export const CommentThreadParent = styled.div<props>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .comment-header {
    position: absolute;
    top: 1%;
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    .back-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 5px;
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
  .comment-container {
    position: absolute;
    top: 8%;
    display: flex;
    width: 90%;
    height: auto;
    overflow: auto;
    flex-direction: column;
    .inner {
      position: relative;
      width: 100%;
      height: 86vh;
      overflow: auto;
      .comment-usr-detail {
        display: flex;
        align-items: center;
        height: 20%;
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
        padding: 10px 0;
        padding-left: 20px;
        max-height: 60%;
        .cm-us-xt {
          width: 100%;
          height: 100%;
          font-size: 2em;
          padding-bottom: 3px;
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
          flex: 1 0 50%;
          justify-content: center;
          padding: 10px 0;
          .cmt-txt {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
            font-size: 0.8em;
            .count {
              width: 15px;
            }
            .txt {
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
          background-color: #c2c92c;
          color: black;
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
        padding: ${(p) =>
          p.showEpisodeInfo || p.showTitleInfo ? '10px' : '0px'};
        height: 300px;
        max-height: ${(p) =>
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
      }
      .comment-replies {
        width: 100%;
        height: auto;
        overflow: auto;
      }
    }
  }
`;

type ButtonProps = {
  color: string;
};
export const StyledButton = styled.div<ButtonProps>`
  padding: 10px 20px;
  font-size: 0.9em;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background-color: ${(p) => p.color};
  :hover {
    cursor: pointer;
    background-color: ${(p) => p.color};
  }
`;

export const HeaderText = styled.div`
  font-size: 1em;
  font-weight: 700;
`;
