import styled from 'styled-components';

export const NotFoundParent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  img {
    position: absolute;
    bottom: 0;
  }
  ::before {
    content: '';
    background-image: url(https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/qc.png?alt=media&token=f1b435bb-446b-4ea9-8c3c-9084a35397e1);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
  }
  .code {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    text-shadow: 0px 20px 9px;
    font-size: 5em;
  }
  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    letter-spacing: 4px;
  }
`;
