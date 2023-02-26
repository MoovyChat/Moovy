import styled from 'styled-components';

export const HeaderParent = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 40px;
  max-height: 60px;
  justify-content: flex-end;
  font-family: 'Prompt', sans-serif;
  padding: 15px 0px;
  backdrop-filter: blur(10px);
  .logo-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    .beta {
      font-weight: 600;
      font-size: 12px;
    }
  }
  .header-buttons {
    display: flex;
    position: relative;
    align-self: flex-end;
    float: right;
    margin-right: 20px;
    gap: 10;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
    .hb {
      :hover {
        box-shadow: 0 0 2px;
      }
    }
  }
  .header {
    height: 40px;
    aspect-ratio: 1;
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
  cursor: pointer;
`;
