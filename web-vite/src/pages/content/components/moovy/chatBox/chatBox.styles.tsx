import styled from "styled-components";

type props = {
  isTextAreaClicked: boolean;
};
export const ChatBoxContainer = styled.div<props>`
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 10px;
  color: inherit;
  overflow: hidden;
  .comment-section {
    overflow: auto;
    height: 90%;
    width: 100%;
    filter: ${(p) => p.isTextAreaClicked && "blur(10px)"};
  }
`;

export const ShowMoreComments = styled.div`
  color: #ababab;
  padding: 10px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0 0 4px;
  :hover {
    color: ${({ theme }) => theme.chatText};
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
`;

type loadProps = {
  accentColor: string;
};
export const LoadMoreComments = styled.div<loadProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  p {
    border-radius: 30px;
    font-weight: 700;
    padding: 10px;
    background-color: ${(p) => p.accentColor};
    color: white;
    :hover {
      cursor: pointer;
      text-shadow: 0 0 5px white;
    }
  }
`;
