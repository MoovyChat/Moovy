import styled from 'styled-components';

export const HeaderParent = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
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
    img {
      width: 40px;
      height: 40px;
    }
    .beta {
      font-weight: 600;
      font-size: 10px;
      align-self: center;
      background-color: #343499;
      padding: 4px 6px;
      border-radius: 10px;
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

export const HeaderButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  background: none;
  text-decoration: none;
  color: inherit;
  font-family: inherit;
  padding: 10px;
  border-radius: 18px;
  font-weight: 600;
`;
