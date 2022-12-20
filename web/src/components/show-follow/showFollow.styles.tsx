import styled from 'styled-components';

export const ShowFollowParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
  .follow-head {
    margin: 15px 0;
    font-weight: bold;
    .close {
      position: absolute;
      right: 20px;
      top: 15px;
      svg {
        padding: 5px;
        :hover {
          padding: 5px;
          cursor: pointer;
          background-color: #6e6e6e8b;
          border-radius: 20px;
        }
        :active {
          background-color: #6e6e6eb7;
        }
      }
    }
  }
  .users-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    min-width: 400px;
    @media (max-width: 500px) {
      min-width: 300px;
    }
  }
`;

export const StyledUserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-height: 60px;
  padding: 10px;
  .user-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .pic-container {
      width: 40px;
      height: 40px;
    }
    .user-name {
      font-weight: 600;
      line-height: 20px;
      margin: 0 10px;
    }
  }
  .follow {
    padding: 7px 15px;
    border-radius: 15px;
    background: ${(p) => p.theme.body};
    font-weight: 600;
    font-size: 0.9em;
    box-shadow: 0 0 5px;
    transition: all 0.2s;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
    :active {
      transform: scale(1);
    }
  }
`;
