import { User } from '../../../../generated/graphql';
import styled from 'styled-components';

type props = {
  user: User;
};
export const UserTipParent = styled.div<props>`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s;
  background-image: url(${(p) => p.user.bg});
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px) grayscale(30%) brightness(60%);
    .first {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      .pic {
        width: 40px;
        height: 40px;
        border: 1px solid black;
        border-radius: 50%;
        box-shadow: 0 0 10px black;
      }
      .text {
        position: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .username {
          font-weight: 600;
          font-size: 1rem;
        }
        .joined {
          position: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          font-size: 0.8rem;
          opacity: 0.8;
        }
      }
    }
    .second {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      width: inherit;
      .batch {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 99%;
        font-weight: 600;
        font-size: 0.8rem;
        padding: 5px;
        .name {
          flex: 1 1 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .count {
          flex: 1 1 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
