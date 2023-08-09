import styled from 'styled-components';

export const HeaderParent = styled.div`
  position: relative;
  top: 0;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  font-family: 'Suez One', serif;
  padding: 15px 0px;
  color: black;
`;

export const HeaderButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  color: #00204c;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  padding: 0px 10px;
  font-family: 'Open Sans', sans-serif;
  :hover {
    color: #a700fa;
    border: none;
    background: none;
    text-decoration: none;
  }
`;

export const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-basis: 30%;
  cursor: pointer;
  .logo-image {
    display: flex;
    padding: 20px;
    border-radius: 20px 20px 20px 20px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: hsla(280, 100%, 49%, 0.11) 6.43px 7.66px 10px 0px;
    gap: 10px;
    img {
      width: 40px;
      height: 40px;
    }
    .beta {
      color: #00204c;
      display: inline;
      align-self: center;
      color: black;
      font-size: 21px;
    }
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  position: relative;
  align-self: flex-end;
  float: right;
  font-size: 10px;
  margin-right: 20px;
  gap: 10;
  flex-basis: 70%;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  height: 100%;
`;
