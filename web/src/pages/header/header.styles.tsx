import styled from 'styled-components';

export const HeaderParent = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  font-family: 'Prompt', sans-serif;
  .header-buttons {
    display: flex;
    position: relative;
    align-self: flex-end;
    float: right;
  }
  .header {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/qc.png?alt=media&token=f1b435bb-446b-4ea9-8c3c-9084a35397e1');
    height: 40px;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export const HeaderButton = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  font-weight: 500;
  border-radius: 10px;
  /* background: linear-gradient(purple, black); */
`;
