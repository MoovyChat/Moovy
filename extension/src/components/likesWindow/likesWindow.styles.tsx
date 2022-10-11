import styled from 'styled-components';

export const LikesWindowStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .likes-container {
    display: flex;
    height: 100%;
    width: max(60%, 400px);
    justify-content: center;
    align-items: flex-start;
  }
`;

export const LikesUserView = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  padding: 10px 20px;
  .first {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    flex: 1 0 70%;
    .child {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      .pic {
        align-items: center;
        justify-content: center;
        display: flex;
        height: 100%;
        .image {
          height: 100%;
          aspect-ratio: 1;
        }
      }
      .name {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 0 10px;
        justify-content: space-evenly;
        .nick {
          font-size: 1.5em;
          display: flex;
          font-weight: 700;
          align-items: center;
        }
        .stats {
          font-size: 1em;
          font-weight: 550;
          display: flex;
          width: max(30%, 100px);
          align-items: flex-start;
          justify-content: space-between;
          .following {
          }
          .follower {
          }
        }
      }
    }
  }
  .second {
    display: flex;
    flex: 1 0 30%;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    align-content: center;
    .child {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;
      align-content: center;
      width: min(100px, 100%);
    }
  }
`;
