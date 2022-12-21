import styled from 'styled-components';

export const ShowThreadParent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  .movies-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .movie {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .show-more {
      font-size: 0.9em;
      font-weight: 600;
      margin: 10px 0;
      padding: 10px 20px;
      background-color: ${(p) => p.theme.hoverColor};
      cursor: pointer;
      border-radius: 20px;
      transition: 0.3s;
      :hover {
        filter: contrast(200%);
        box-shadow: 0 0 5px, inset 0 0 1px;
      }
    }
  }
`;

export const StyledTitleHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .title-image {
    height: 50px;
    width: 50px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .title-text {
    margin: 0px 10px;
  }
`;
