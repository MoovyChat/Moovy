import styled from "styled-components";

export const StyledNest = styled.div`
  width: 100%;
  display: block;
  overflow: scroll;
`;

export const StyledJoinLeaveMessage = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  .profile-pic {
    img {
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }
  }
  .nest-msg {
    display: contents;
    font-size: 12px;
    font-weight: bold;
    color: #8e8e8e;
    .moovy-join,
    .moovy-left,
    .moovy-create {
      display: flex;
      align-items: center;
      border-radius: 18px;
      box-shadow: 0px 0px 4px;
      padding: 5px 10px;
    }
    .moovy-left {
      background-color: #760117;
    }
    .moovy-join {
      background-color: #116600;
    }
    .moovy-create {
      background-color: #b78600;
    }
  }
`;

type Props = {
  isUser: boolean;
};
export const StyledUserMessage = styled.div<Props>`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: ${(p) => (p.isUser ? "flex-end" : "flex-start")};
  align-items: center;
  margin-top: 25px;
  .profile-pic {
    display: flex;
    align-items: center;
    margin: 0 5px;
    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }
  /* Rounded message bubble */
  .rounded {
    border-radius: 25px;
  }

  /* Minimalist message bubble */
  .minimalist {
    border-radius: 8px;
  }
  .receiver {
    align-self: flex-start;
    background-color: #e9e9e9;
    border-radius: 16px 16px 16px 0;
    color: black;
    margin-bottom: 8px;
    max-width: 70%;
    padding: 8px 16px;
    position: relative;
  }
  .sender {
    align-self: flex-end;
    background-color: #007bff;
    align-items: flex-end;
    border-radius: 16px 16px 0 16px;
    color: white;
    margin-bottom: 8px;
    max-width: 70%;
    padding: 8px 16px;
    position: relative;
  }
  .one-emoji {
    background-color: transparent;
    padding: 0px;
    margin-bottom: 0px;
    .nest-msg {
      font-size: 50px !important;
      line-height: 1 !important;
    }
  }
  .gif-container {
    background: none;
    padding: 0px;
    border-radius: 0px;
    .nest-gif {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #3498db; /* Change this color according to your theme */
      box-sizing: border-box;
      width: 200px;
      border-radius: 18px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      position: relative;
      margin: 1em 0;

      .gif-msg {
        width: 100%;
        height: auto;
        object-fit: cover;
        position: relative;
      }
    }

    .nest-gif::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 18px;
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    .nest-gif:hover {
      transform: scale(1.1);
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .username {
      font-size: 12px;
      font-weight: bold;
      color: ${(p) => (p.isUser ? "#fff" : "rgb(0 146 255)")};
    }
    .nest-msg {
      font-size: 14px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: 1.6;
    }
  }
`;
