import styled from 'styled-components';

export const ImageStackParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  .gp {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 50px;

    :hover {
      .two {
        left: 45px;
      }

      .three {
        left: 90px;
      }
    }
    .profile-box {
      width: 40px;
      height: 40px;
      border-radius: 50%;
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
      transition: all 0.4s;
      :hover {
        cursor: pointer;
        box-shadow: 0 0 5px 5px, inset 0 0 5px 5px;
      }
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
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
