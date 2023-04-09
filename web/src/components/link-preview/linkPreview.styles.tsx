import styled from 'styled-components';

export const StyledLinkPreview = styled.div`
  display: flex;
  width: calc(100% - 75px);
  align-self: end;
  border-radius: 18px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 0 4px ${p => (p.theme.themeType === 'dark' ? '#8b8b8b' : '')};
  .link-image {
    position: relative;
    width: 150px;
    height: 120px;
    img {
      width: 150px;
      height: 100%;
      object-fit: cover;
    }
    .play-btn {
      position: absolute;
      display: flex;
      width: 50px;
      justify-content: space-evenly;
      align-items: center;
      left: 50%;
      top: 50%;
      font-size: 15px;
      z-index: 10;
      transform: translate(-50%, 40%);
      border: 1px solid;
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
      backdrop-filter: brightness(0.2);
    }
  }
  .link-data {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    .link-title {
      font-size: 14px;
      width: 100%;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link-desc {
      font-size: 12px;
      font-weight: 500;
      margin-top: 5px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link-sub {
      display: inline-block;
      font-size: 10px;
      font-weight: 500;
      margin-top: 5px;
      width: 100%;
    }
  }
`;
