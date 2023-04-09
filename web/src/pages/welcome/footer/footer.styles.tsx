import styled from 'styled-components';

export const StyledFooter = styled.div`
  min-height: 150px;
  width: 99.5vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  backdrop-filter: contrast(0.8);
  .image-container {
    display: flex;
    justify-content: flex-start;
  }

  .links-block {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    gap: 50px;
    flex-wrap: wrap;
    .block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .title {
        font-size: 16px;
        font-weight: 600;
      }
      .links {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        .special {
          font-weight: 600;
          color: #4385ff;
        }
      }
    }
  }
`;

export const SocialButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
  vertical-align: baseline;
  display: flex;
  width: 100px;
  gap: 20px;
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  :visited {
    color: #4385ff;
  }
  :hover {
    color: #99ffff;
  }
`;
