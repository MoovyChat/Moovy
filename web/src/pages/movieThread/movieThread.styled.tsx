import styled from 'styled-components';

export const MovieThreadParent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  .movie-container {
    position: absolute;
    top: 9%;
    height: 86%;
    width: 100%;
    .no-data {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 20px;
      width: 100%;
      height: 100%;
    }
    .thread-movie {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 100%;
      overflow: hidden;
    }
    .thread-comments {
      margin-top: 10px;
      position: relative;
      display: block;
      height: calc(100% - 100px);
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      font-weight: 700;
      .show-more {
        font-size: 0.7em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        padding-bottom: 25px;
        z-index: 10;
        :hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .movie-container {
      .thread-movie {
        padding-bottom: 6px;
      }
      .thread-comments {
      }
    }
  }
  @media (max-width: 500px) {
    .movie-container {
      .thread-movie {
        padding-bottom: 6px;
      }
      .thread-comments {
      }
    }
  }
`;
