import styled from 'styled-components';

export const ChatBoxContainer = styled.div`
  position: relative;
  height: 100%;
  font-size: 10px;
  color: inherit;
  scrollbar-face-color: aliceblue;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;

export const ShowMoreComments = styled.div`
  color: #909090;
  padding: 10px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  :hover {
    color: white;
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
`;

export const NoCommentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 800;
  h4,
  p {
    text-align: center;
    width: 100%;
  }
  h4 {
    padding-top: 10%;
    font-size: 1em;
  }
  p {
    font-size: 0.9em;
  }
`;

export const LoadMoreComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    border-radius: 30px;
    font-weight: 700;
    padding: 10px;
    background-color: #ad2121;
    color: white;
    :hover {
      cursor: pointer;
      text-shadow: 0 0 5px white;
    }
  }
`;
