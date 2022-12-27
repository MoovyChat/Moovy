import styled from 'styled-components';

export const StyledMiniCommentCard = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 1px;
  border-radius: 18px;
  .photo {
    align-self: flex-start;
    margin-top: 20px;
    width: 40px;
    height: 40px;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 50px);
    height: 100%;
    .name {
      font-size: 0.9em;
      font-weight: 600;
      margin-top: 10px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      .time {
        font-size: 0.6em;
      }
    }
    .msg {
      font-size: 0.8em;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
`;
