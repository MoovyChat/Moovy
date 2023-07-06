import styled from "styled-components";

export const AvailableNest = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  min-height: 60px;
  width: 100%;
`;

export const NestIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .nest-thumbs {
    object-fit: cover;
    overflow: hidden;
    width: 80px;
    height: 100%;
    min-height: 100px;
  }
`;

export const NestInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .nest-detail {
    width: 100%;
    .nest-detail-room {
      display: flex;
      align-items: center;
      gap: 5px;
      .room-label {
        font-size: 16px;
        font-weight: 600;
        color: rgb(255 255 255);
      }
    }
    .nest-detail-show {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      margin: 10px 0px;
      margin-right: 10px;
      .nest-detail-icon {
        box-shadow: 0 0 1px red;
        padding: 3px;
      }
      .nest-movie-name {
        font-weight: 600;
      }
    }
    .nest-detail-users {
      position: relative;
      display: flex;

      .user-chip {
        position: relative;
        margin-right: -20px;
        border-radius: 50%;
        overflow: hidden;
        z-index: 3;
        .user-chip-img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid white;
        }
      }

      .user-chip:nth-child(2) {
        z-index: 2;
        margin-right: -10px;
      }

      .user-chip:nth-child(3) {
        z-index: 1;
        margin-right: 0px;
      }

      .more-users {
        position: relative;
        z-index: 0;
        background: #212121;
        color: white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
