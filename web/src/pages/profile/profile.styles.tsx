import styled from 'styled-components';

export const ProfileParent = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .cover-photo {
    width: 100%;
    position: absolute;
    top: 4px;
    height: 200px;
    z-index: -2;
    box-shadow: 0 0 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .change-background {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
    top: 150px;
    right: 10px;
    background-color: #ffffffb4;
    border-radius: 6px;
    color: #1c1e21;
    font-size: 12px;
    line-height: 16px;
    width: auto;
    height: 40px;
    z-index: 0;
    .add-cover {
      font-weight: 600;
      color: #050505;
      line-height: 20px;
      margin-left: 4px;
    }
    :hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }
  }
  .user-photo {
    position: absolute;
    display: flex;
    top: 160px;
    left: 50px;
    ::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: black;
      z-index: -1;
    }
    .user-container {
      position: relative;
      width: 100px;
      height: 100px;
      .edit {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        color: black;
        border-radius: 50%;
        padding: 6px;
        :hover {
          cursor: pointer;
          background-color: #f2f2f2;
        }
      }
    }
  }
`;
