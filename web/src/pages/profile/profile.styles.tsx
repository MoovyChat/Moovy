import styled from 'styled-components';

export const ProfileParent = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  .top {
    position: relative;
    width: 100%;
    flex: 1 1 40%;
    overflow: hidden;
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
        object-fit: cover;
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
      .user-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin-left: 10px;
        .name {
          font-size: 20px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          .i {
            margin-left: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            :hover {
              border-radius: 50%;
              box-shadow: inset 0 0 10px;
            }
            :active {
              box-shadow: inset 0 0 20px;
            }
          }
        }
        .time {
          font-size: 14px;
          font-weight: 550;
          opacity: 0.6;
        }
      }
    }
  }
`;

export const SubGroups = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 60%;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
  .follow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    border: 1px solid;
    .followers,
    .following {
      padding: 20px 0;
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      .fd {
        font-size: 15px;
        font-weight: 600;
        padding-bottom: 10px;
      }
      .pd {
        display: flex;
      }
    }
    .followers {
      padding-left: 20px;
    }
    .following {
      padding-right: 20px;
    }
  }
  .con {
    position: absolute;
    top: 120px;
    .box {
      display: flex;
      flex-direction: column;
      width: 100%;
      .hd {
        padding: 20px;
        background: ${(p) => p.theme.background};
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sm {
          font-size: 0.6rem;
          :hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
      .bd {
      }
    }
  }
`;

type tbProps = {
  error?: string;
};
export const ProfileTextBoxParent = styled.div<tbProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  .title {
    flex: 1 1 30%;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    align-items: center;
    color: ${(p) => (p.error ? 'red' : p.theme.text)};
  }
  .in {
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    input,
    select {
      width: 100%;
      padding: 10px;
      color: ${(p) => p.theme.text};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: transparent;
      box-shadow: 0 0 10px, inset 0 0 5px;
      border-radius: 10px;
      outline: none;
      :focus {
        box-shadow: 0 0 3px 3px #22b3e8;
      }
    }
  }
  .light-container {
    flex: 1 1 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    .light {
      border-radius: 50%;
      background-color: ${(p) => (p.error === '' ? '#00ff00' : '#ff0000')};
      box-shadow: 0 0 15px 6px
          ${(p) => (p.error === '' ? '#00ff00' : '#ff0000')},
        inset 0 0 4px black;
      height: 15px;
      width: 15px;
      display: flex;
    }
  }
`;
