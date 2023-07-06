import { rotate180, rotateX180 } from '../../utils/keyframes';

import styled from 'styled-components';

export const HomeHeaderParent = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  .logo,
  .user {
    position: relative;
    display: flex;
    height: 100%;
    margin: 0px 50px;
    justify-content: space-evenly;
    align-items: center;

    .logo-image {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .image {
        width: 40px;
        height: 40px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    .search-icon {
      padding: 10px;
      color: #ffffff; /* Black color */
      cursor: pointer; /* Changes the cursor when hovering over the icon */
      box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.25);
      border-radius: 50%;
    }

    .search-icon:hover {
      color: #007bff; /* Changes the color of the icon to blue when hovered over */
      box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
    }
  }

  @media (max-width: 800px) {
    .user {
      margin: 0px 15px;
    }
    .search {
      width: 100%;
    }
    .logo {
      margin: 0px 15px;
      .logo-image {
        display: none;
      }
      .logo-icon {
        .icon {
          display: flex;
          padding: 5px;
          :hover {
            background-color: #6e6e6e50;
            cursor: pointer;
            border-radius: 50%;
          }
          :active {
            background-color: #6e6e6e7d;
          }
        }
      }
    }
  }
`;
