// SliderStyles.ts
import styled from 'styled-components';

const colors = {
  b1cd: '#500033',
  b1cl: '#ff0077',
  b2cd: '#000050',
  b2cl: '#0033ff',
  b3cd: '#00501d',
  b3cl: '#00ff44',
  b4cd: '#554d00',
  b4cl: '#ff4e00',
  b5cd: '#300050',
  b5cl: '#8000ff',
  black: '#000',
  white: '#fff',
  grey: '#b5b4b4',
};

const getColorStyles = (index: number) => {
  switch (index) {
    case 0:
      return `
        background-color: ${colors.b1cd};
        .illustration .inner {
          background-color: ${colors.b1cl};
        }
        button {
          background-color: ${colors.b1cl};
        }
      `;
    case 1:
      return `
        background-color: ${colors.b2cd};
        .illustration .inner {
          background-color: ${colors.b2cl};
        }
        button {
          background-color: ${colors.b2cl};
        }
      `;
    case 2:
      return `
        background-color: ${colors.b3cd};
        .illustration .inner {
          background-color: ${colors.b3cl};
        }
        button {
          background-color: ${colors.b3cl};
        }
      `;
    case 3:
      return `
        background-color: ${colors.b4cd};
        .illustration .inner {
          background-color: ${colors.b4cl};
        }
        button {
          background-color: ${colors.b4cl};
        }
      `;
    case 4:
      return `
        background-color: ${colors.b5cd};
        .illustration .inner {
          background-color: ${colors.b5cl};
        }
        button {
          background-color: ${colors.b5cl};
        }
      `;
    default:
      return '';
  }
};

interface BoxStyleProps {
  index: number;
}
export const StyledBox = styled.div<BoxStyleProps>`
  height: 500px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 28px;
  ${props => getColorStyles(props.index)}
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  .bg {
    padding: 2rem;
    background-color: rgb(0 0 0 / 20%);
    width: 55%;
    transform: skewX(7deg);
    position: absolute;
    height: 100%;
    left: -10%;
    padding-left: 20rem;
    transform-origin: 0 100%;

    @media only screen and (max-width: 800px) {
      width: 65%;
    }

    @media only screen and (max-width: 650px) {
      width: 100%;
      left: 0;
      bottom: 0;
      height: 54%;
      transform: skewX(0deg);
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: inherit;
      pointer-events: none;
      transform: skewX(10deg);

      @media only screen and (max-width: 650px) {
        width: 120%;
        bottom: 0;
        transform: skewX(0deg);
      }
    }
  }

  .details {
    padding: 0rem 5rem 5rem 5rem;
    padding-left: 10rem;
    z-index: 100;
    grid-column: 1 / span 1;
    grid-row: 1 / -1;

    @media only screen and (max-width: 650px) {
      grid-row: 2 / span 1;
      grid-column: 1 / -1;
      text-align: center;
      padding: 2rem;
      transform: translateY(-9rem);
    }

    h1 {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    p {
      display: inline-block;
      font-size: 14px;
      margin-bottom: 2rem;
      margin-right: 5rem;
      margin-top: 10px;

      @media only screen and (max-width: 800px) {
        margin-right: 0;
      }
    }

    button {
      padding: 1rem 3rem;
      color: $white;
      border-radius: 2rem;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
`;

export const StyledFeatures = styled.div`
  .feature-heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    color: white;
  }

  .feature-list {
    list-style: none;
    padding-left: 24px;
  }

  .feature-list strong {
    margin: 0 4px; /* Add space around the strong tags */
  }

  .feature-list li {
    margin-bottom: 8px;
    line-height: 1.5;
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .feature-list li::before {
    content: '✔';
    margin-right: 8px;
    color: white;
  }
`;

export const StyledHomeSlider = styled.div`
  display: flex;
  flex-direction: column;

  .container {
    margin: 8rem;
    height: 450px;
    position: relative;
    overflow: hidden;
    border-radius: 5rem;

    .prev,
    .next {
      width: 4rem;
      cursor: pointer;
      opacity: 0.2;
      transition: all 0.3s ease;
      z-index: 10000;
      position: absolute;

      @media only screen and (max-width: 650px) {
        display: none;
      }

      @media only screen and (max-width: 1000px) {
        border-radius: 0;
      }

      &:hover {
        opacity: 1;
      }
    }
    .prev {
      top: 50%;
      left: 2%;
      transform: translateY(-50%);
    }

    .next {
      top: 50%;
      right: 2%;
      transform: translateY(-50%);
    }

    .active {
      opacity: 1 !important;
    }
  }
`;

export const StyledTrail = styled.div`
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;
  z-index: 10000;
  position: absolute;

  @media only screen and (max-width: 650px) {
    width: 90%;
    bottom: 13%;
  }

  div {
    border-top: 3px solid #fff;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    @media only screen and (max-width: 650px) {
      padding: 1rem;
    }
  }
`;
