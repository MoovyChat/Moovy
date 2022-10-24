import styled from 'styled-components';

export const RightParent = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  .adblock {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    height: 30%;
    width: 80%;
    border: 1px solid;
    margin: 20px;
  }
  .trending {
    position: absolute;
    height: 50%;
    width: 80%;
    background: ${(p) => p.theme.trendingTiles};
    margin: 20px;
    border-radius: 20px;
    overflow: hidden;
    .content {
      display: flex;
      height: calc(100% - 40px);
      flex-direction: column;
      justify-content: space-evenly;
      overflow: auto;
      .item {
        padding: 0 20px;
        .title {
          font-weight: 600;
        }
        .count {
          font-size: 0.7em;
          opacity: 0.8;
        }
      }
    }
    .heading {
      display: flex;
      height: 40px;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      .sub {
        padding-left: 10px;
      }
    }
  }
  .titles {
    top: 35%;
  }
  .hashtags {
    top: 90%;
  }
`;
