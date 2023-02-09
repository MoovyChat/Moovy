import styled from 'styled-components';

export const StyledLinkPreview = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 75px);
  align-self: end;
  border-radius: 18px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 0 4px ${(p) => (p.theme.themeType === 'dark' ? '#8b8b8b' : '')};
  .link-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
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
  }
`;
