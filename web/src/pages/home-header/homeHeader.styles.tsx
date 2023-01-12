import { rotate180, rotateX180 } from '../../utils/keyframes';

import styled from 'styled-components';

export const HomeHeaderParent = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  .logo,
  .user {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;

    .logo-image {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .image {
        width: 45px;
        height: 45px;
        object-fit: contain;
      }
      .logo-text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .logo-icon {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .icon {
        display: none;
      }
    }
  }
  .logo {
  }
  .user {
    justify-content: space-evenly;
    cursor: pointer;
    :hover {
      border-radius: 50%;
      box-shadow: 0 0 3px;
    }
    .logo-image {
      display: flex;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    }
  }
  .search {
    width: 40%;
  }

  @media (max-width: 500px) {
    .logo {
      .logo-image {
        display: none;
      }
      .logo-icon {
        .icon {
          display: flex;
          :hover {
            background-color: #6e6e6e50;
            cursor: pointer;
            border-radius: 50%;
            padding: 5px;
          }
          :active {
            background-color: #6e6e6e7d;
          }
        }
      }
    }
  }
`;
