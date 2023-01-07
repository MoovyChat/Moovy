import styled from 'styled-components';

export const ProfileParent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
  .profile-header {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 150px;
    flex-shrink: 0;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100px;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .follow {
      position: absolute;
      top: 105px;
      right: 10px;
      z-index: 0;
    }

    .profile-pic {
      position: absolute;
      top: 80px;
      left: 10px;
      width: 70px;
      height: 70px;
      z-index: 0;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    .name {
      position: absolute;
      top: 105px;
      left: 90px;
      gap: 2px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      .p {
        :hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .fullName {
        font-size: 14px;
        font-weight: 500;
      }
      .nickName {
        font-size: 12px;
        font-weight: 500;
        opacity: 0.7;
      }
    }
  }
  .pro {
    display: flex;
    flex-direction: column;
    width: 99%;
    font-size: 0.9rem;
    .block {
      display: flex;
      padding: 5px;
      font-weight: 600;
      opacity: 0.8;
      gap: 5px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
      .info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        white-space: pre-wrap;
        font-size: 11px;
        ::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
  .movies {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    gap: 10px;
    outline: 1px dashed;
    padding: 5px 3px;
    .title {
      font-size: 1.5em;
      font-weight: 500;
      opacity: 0.7;
    }
    .list {
      display: flex;
      width: 100%;
      gap: 3px;
      justify-content: space-evenly;
      align-items: center;
      .movie {
        height: 100px;
        width: 70px;
        box-shadow: 0 0 5px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        :hover {
          box-shadow: 0 0 7 px;
        }
      }
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

export const NoTitles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.5em;
  height: 100%;
`;
