import styled from 'styled-components';

export const StyledAbout = styled.div`
  display: flex;
  width: 100%;
  color: white;
  height: 120vh;
  > .about-background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 120vh;
    > img {
      width: 100%;
      height: 120vh;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  > .overlay {
    position: absolute;
    z-index: 1;
    background-color: rgb(0, 32, 76);
    opacity: 0.8;
    width: 100%;
    height: 120vh;
  }

  > .about-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 10%;
    gap: 20px;
    z-index: 2;

    > h1 {
      margin: 0;
      padding: 0;
      font: normal normal bold 18px/1.4em 'open sans', sans-serif;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }

    > .sub-title {
      margin: 0;
      padding: 0;
      font: normal normal normal 70px/1.4em poppins-semibold, poppins,
        sans-serif;
      font-weight: 600;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }

    > .desc {
      margin: 0;
      padding: 0;
      font: normal normal normal 28px/1.4em 'open sans', sans-serif;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }

    > .footer-desc {
      margin: 0;
      padding: 0;
      font: normal normal normal 15px/1.4em 'open sans', sans-serif;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
`;
