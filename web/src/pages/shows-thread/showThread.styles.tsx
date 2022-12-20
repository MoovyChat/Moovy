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
