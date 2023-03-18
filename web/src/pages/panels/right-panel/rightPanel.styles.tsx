import styled from 'styled-components';

export const RightParent = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  border-left: 0.3px solid #8f8f8f81;
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
    box-shadow: 0 0 4px ${(p) => p.theme.toggleBorder};
    .content {
      display: flex;
      height: calc(100% - 40px);
      flex-direction: column;
      justify-content: space-between;
      overflow: auto;
      .item {
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        .title {
          font-weight: 600;
          :hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .count {
          font-size: 0.7em;
          opacity: 0.8;
        }
      }
      .purchase {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ff002693;
        cursor: pointer;
        padding: 10px;
        font-weight: 600;
        font-size: 14px;
        color: white;
        :hover {
          background-color: #ff0026f1;
        }
        .price {
          position: relative;
          .limited {
            position: absolute;
            margin-left: 10px;
          }
        }
        .warning {
          font-size: 10px;
          font-weight: 400;
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
    top: 0%;
    .content {
      justify-content: space-evenly;
    }
  }
  .premium {
    top: 35%;
    background: ${(p) => p.theme.premium};
    svg {
      color: ${(p) => (p.theme.themeType === 'dark' ? '#ffffff' : '#000000')};
    }
  }
`;
