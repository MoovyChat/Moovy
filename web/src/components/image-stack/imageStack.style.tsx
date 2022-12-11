import styled from 'styled-components';

export const ImageStackParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .gp {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 50px;
    .profile-box {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .one,
    .two,
    .three {
      position: absolute;
      top: 3px;
      left: 0px;
      z-index: 2;
    }
    .two {
      z-index: 1;
      left: 20px;
    }
    .three {
      z-index: 0;
      left: 40px;
    }
  }
  .count {
    width: 60%;
    display: flex;
    font-size: 13px;
    font-weight: 600;
    float: right;
  }
`;
