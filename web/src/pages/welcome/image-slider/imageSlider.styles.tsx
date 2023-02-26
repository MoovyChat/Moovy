import styled from 'styled-components';

export const StyledImageSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 530px;
  position: relative;
  overflow: hidden;
  gap: 20px;

  .slider-main {
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      transition: all 1s ease-in-out;
    }
  }

  .slider-thumbs {
    position: relative;
    height: 150px;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    ::-webkit-scrollbar-thumb {
      width: 0;
      background-color: transparent;
      box-shadow: none;
    }
    ::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }
    .thumb {
      height: 80px;
      width: 200px;
      cursor: pointer;
      opacity: 0.5;
      scroll-snap-align: center;
      img {
        height: 100%;
        width: 150px;
        object-fit: cover;
        transition: all 0.5s ease-in-out;
      }
    }
    .active {
      opacity: 1;
      position: relative;
      z-index: 10;
      img {
        border: 2px solid #fff;
        transform: scale(1.2);
      }
    }

    .previous,
    .next-slide {
      position: sticky;
      background: none;
      border: none;
      font-size: 1.5em;
      color: #fff;
      cursor: pointer;
      z-index: 10;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      transition: all 0.2s;
      :hover {
        background-color: rgba(0, 0, 0, 0.468);
      }
    }
    .previous {
      left: 10px;
    }
    .next-slide {
      left: 20px;
    }
  }
`;
