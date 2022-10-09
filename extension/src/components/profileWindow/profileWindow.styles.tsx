import styled from 'styled-components';

export const ProfileParent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 2em 3em;
  width: 100%;
  height: 100%;
  overflow: auto;

  .header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    min-height: 65px;
    flex-shrink: 0;
    .account {
      position: absolute;
      top: -10px;
      right: 0px;
    }
    .profile {
      position: relative;
      padding: 10px;
      height: 95%;
      aspect-ratio: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .pic {
        width: 100%;
        height: 100%;
      }
      .heart {
        position: absolute;
        filter: drop-shadow(0px 0px 0px);
        z-index: 1;
        bottom: 0;
        left: 0;
        transition: transform 0.3s;
        cursor: pointer;
        :hover {
          transform: scale(1.05);
          transition: transform 0.3s;
        }
        :active {
          transform: scale(0.98);
          transition: transform 0.3s;
        }
      }
    }
    .detail {
      display: flex;
      flex-direction: column;
      flex: 8;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      .info {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .name {
          font-size: 2em;
          font-weight: 500;
          margin: 0 5px;
          width: 100%;
          flex: 2;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .bio {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          font-size: 1.2em;
        }
      }
    }
  }
  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 70px;
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .heading {
          font-weight: 600;
          font-size: 1.4em;
        }
        .count {
          font-weight: 600;
          font-size: 1.2em;
        }
      }
    }
  }

  .feed {
    flex: 6;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    .toolbar {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      overflow: hidden;
      border-radius: 40px;
      box-shadow: inset 0px 0px 4px 0px;
      .item {
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 1.5em;
        justify-content: center;
        align-items: center;
        :hover {
          cursor: pointer;
        }
      }
    }
    .list {
      flex: 9;
      width: 100%;
      padding: 10px;
    }
  }
`;

type props = {
  profilePic: string;
};
export const ProfileImage = styled.div<props>`
  display: inline-block;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  background: url('${(p) => p.profilePic}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const HiddenRadioButton = styled.input.attrs({
  type: 'radio',
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
`;

export const RadioButton = styled.span`
  ${HiddenRadioButton}:checked + && {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #03b3ff;
    box-shadow: inset -1px 0 1px black;
    font-weight: 600;
    color: white;
    transition: all 0.5s;
  }
`;

export const NoTitles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.5em;
  height: 100%;
`;
