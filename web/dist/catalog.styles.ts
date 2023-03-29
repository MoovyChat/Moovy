import{s as e}from"./styled-components.browser.esm.ts";const o=e.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  min-width: 0;
  justify-content: flex-start;
  align-items: center;
  .heading {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .content {
    overflow: auto;
    height: 100%;
    width: 100%;
  }
`,n=e.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  max-width: 100%;
  min-width: 0;
  justify-content: center;
  align-items: flex-start;
`,r=e.div`
  height: 121px;
  width: 215px;
  cursor: pointer;
  position: relative;
  margin: 10px;
  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    height: 121px;
    width: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: height 0.5s, width 0.5s;
    .title-bg {
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .info {
      width: 95%;
      height: 70px;
      background: black;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      font-weight: 600;
      padding: 10px;
      box-shadow: inset 0px -3px 10px 1px #575757;
      .title {
        font-size: 1rem;
      }
      .title-attr {
        display: flex;
        font-size: 0.6rem;
        text-transform: capitalize;

        div {
          margin: 5px 0px;
          padding: 3px;
          border: 1px solid white;
        }
      }
    }
  }

  :hover {
    .container {
      height: ${t=>t.hover&&"220px"};
      width: ${t=>t.hover&&"300px"};
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: ${t=>t.hover?t.styledHover:"translateX(-50%) translateY(-50%)"};
      overflow: hidden;
      border-radius: ${t=>t.hover&&"10px"};
      .title-bg {
        overflow: hidden;

        img {
          transform: scale(2);
          transition: transform 50s;
        }
      }

      .info {
      }
    }
  }
`;export{o as C,r as S,n as a};
