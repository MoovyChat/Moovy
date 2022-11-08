import styled from 'styled-components';

export const DisplayPlatformsStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  .platform {
    flex: 1 0 20%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .set {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 1px solid;
    }
    .layover {
      position: absolute;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      border: 1px solid black;
      color: #ff005d;
      background-color: rgba(186, 178, 178, 0.8);
      border-radius: 50%;
    }
  }
`;

export const LogoSetParent = styled.div``;
