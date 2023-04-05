import styled from 'styled-components';

export const LikesWindowStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  overflow: auto;
  padding: 10px 0;
`;

export const StyledUserCard = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  :hover {
    cursor: pointer;
    .user-container {
      .name {
        text-decoration: underline;
      }
    }
  }
  .user-container {
    display: flex;
    align-items: center;
    padding-left: 15px;
    gap: 10px;
    .profile-pic {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .name {
      font-size: 14px;
    }
  }
  .follow {
    position: absolute;
    right: 10px;
    z-index: 16;
  }
`;
