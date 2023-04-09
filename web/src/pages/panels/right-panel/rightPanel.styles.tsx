import styled from 'styled-components';

export const RightParent = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  border-left: 0.3px solid #8f8f8f81;
  .trending {
    position: relative;
    width: 80%;
    margin: 20px;
    padding-top: 10px;
    padding-bottom: 15px;
    border-radius: 20px;
    background: ${p => p.theme.trendingTiles};
    box-shadow: 0 0 4px ${p => p.theme.toggleBorder};
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .item {
        padding: 10px 20px;
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

  .socials {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    .socials-block {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .item-heading {
        font-size: 12px;
        font-weight: 600;
      }
      .item-options {
        display: flex;
        justify-content: space-evenly;
        border-radius: 20px;
        padding: 10px;
        background: ${p => p.theme.trendingTiles};
        box-shadow: 0 0 4px ${p => p.theme.toggleBorder};
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        .patreon,
        .bmc {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          .logo {
            width: 100px;
            cursor: pointer;
            img {
              width: 100%;
              object-fit: contain;
            }
          }
        }

        .social {
          cursor: pointer;
          :hover {
            transform: scale(1.3);
            transition: transform 0.5s;
          }
          :active {
            transform: scale(1);
            transition: transform 0.2s;
          }
        }
      }
    }
  }
`;
