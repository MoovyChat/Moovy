import styled from 'styled-components';

export const StyledImageSlider = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  .slide {
    position: absolute;
    top: 0;
    height: 400px;
    width: 100%;
    max-width: 600px;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    z-index: -5;
    opacity: 0;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .slide.active {
    opacity: 1;
    z-index: 1;
    left: 0px;
    transform: translateX(0);
  }

  .slide.prev {
    opacity: 0.2;
    z-index: -2;
    left: -200px; /* Set the left position of the previous slide */
    transform: translateX(-40%);
  }

  .slide.next {
    opacity: 0.2; /* Set the opacity to 0.2 for the next slide */
    z-index: -2;
    left: 200px;
    transform: translateX(40%);
  }
  .prev-arrow {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 36px;
    cursor: pointer;
    z-index: 3;
  }

  .next-arrow {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 36px;
    cursor: pointer;
    z-index: 3;
  }

  @media screen and (max-width: 600px) {
    height: 200px;
    max-width: 300px;

    .slide {
      height: 200px;
      max-width: 300px;
    }

    .prev {
      left: 10px;
      font-size: 24px;
    }

    .next {
      right: 10px;
      font-size: 24px;
    }
  }
`;
