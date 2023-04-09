import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 200px;
  width: 99.5vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.5;
  text-align: center;
  .year{
    font-weight: 600;
      font-size: 10px;
      align-self: center;
      background-color: #343499;
      padding: 4px 6px;
      border-radius: 10px;
      color: white;
  }
`;

export const FooterContainer = styled.footer`
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
