import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { welcomeHeaderColumn } from '../screenshots/screenshots.styles';
type props = {
  selectedOption: number;
};
export const StyledInstallationGuide = styled(animated.div)<props>`
  display: flex;
  width: 100%;
  min-height: 400px;
  transition: all 1s;
  height: 100vh;
  height: 100dvh;
  .steps {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    .heading {
      display: flex;
      justify-content: center;
      align-items: center;
      ${welcomeHeaderColumn}
    }
    .one,
    .two,
    .three,
    .four,
    .five {
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .one {
      background-color: ${p => (p.selectedOption === 1 ? 'black' : 'none')};
      color: ${p => (p.selectedOption === 1 ? 'white' : '')};
      width: ${p => (p.selectedOption === 1 ? '100%' : '50%')};
    }
    .two {
      background-color: ${p => (p.selectedOption === 2 ? 'black' : 'none')};
      width: ${p => (p.selectedOption === 2 ? '100%' : '50%')};
      color: ${p => (p.selectedOption === 2 ? 'white' : '')};
    }
    .three {
      background-color: ${p => (p.selectedOption === 3 ? 'black' : 'none')};
      width: ${p => (p.selectedOption === 3 ? '100%' : '80%')};
      color: ${p => (p.selectedOption === 3 ? 'white' : '')};
    }
    .four {
      background-color: ${p => (p.selectedOption === 4 ? 'black' : 'none')};
      width: ${p => (p.selectedOption === 4 ? '100%' : '50%')};
      color: ${p => (p.selectedOption === 4 ? 'white' : '')};
    }
    .five {
      background-color: ${p => (p.selectedOption === 5 ? 'black' : 'none')};
      width: ${p => (p.selectedOption === 5 ? '100%' : '80%')};
      color: ${p => (p.selectedOption === 5 ? 'white' : '')};
    }
    .step {
      font-size: 16px;
      font-weight: 600;
      padding: 5px 20px;
      cursor: pointer;
      p,
      .info {
        display: flex;
        align-items: center;
        white-space: nowrap;
        flex-wrap: wrap;
      }
      .info {
        opacity: 0.6;
      }
    }
  }
  .gif-container {
    width: 60%;
    height: 100vh;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    .gif {
      max-height: 400px;
      width: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        box-shadow: 0px 0px 30px #000000;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    .steps {
      width: 100%;
      justify-content: flex-start;
    }
    .gif-container {
      width: 100%;
    }
  }
`;
