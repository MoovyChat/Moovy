import styled from 'styled-components';

export const ShowFollowParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 40vh;
  flex-direction: column;
  position: relative;
  padding: 10px 20px 100px 20px;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 99vh;
  }
`;

export const StyledUserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
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
  }
`;
