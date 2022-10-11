import styled from 'styled-components';

export const MiniCardParent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 30px;
  margin: 5px 0;
  .body {
    flex: 3;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
  }
  .options {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
`;
