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
    .moovy-left {
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
    border-radius: 16px 16px 0 16px;
    color: white;
    margin-bottom: 8px;
    max-width: 70%;
    padding: 8px 16px;
    position: relative;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .nest-msg {
      font-size: 12px;
    }
    .username {
      font-size: 12px;
      font-weight: bold;
      color: ${(p) => (p.isUser ? "#fff" : "rgb(0 146 255)")};
    }
  }
`;
