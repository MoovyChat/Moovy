import styled from 'styled-components';

export const WithOutLoginWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 300px;
  display: center;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
`;
export const Welcome = styled.div`
  flex-basis: 20%;
  display: flex;
  align-items: flex-start;
  color: white;
`;
export const ButtonParent = styled.div`
  width: 70%;
  flex-basis: 50%;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 2px;
  font-size: 15px;
  color: white;
`;
