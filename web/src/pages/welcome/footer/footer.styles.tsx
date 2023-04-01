import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 200px;
  width: 99.5vw;
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.5;
  text-align: center;
`;

export const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  :visited {
    color: #0087ff;
  }
  :hover {
    color: #99ffff;
  }
`;
