import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 100vh;
  width: 99.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  margin-top: 20px;
  position: relative;
  .moovy-chat-copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: 50px;
    padding-left: 50px;
    font-size: 20px;
  }
  .footer-logo {
    flex-basis: 20%;
  }
  > .sub-title {
    position: relative;
    margin: 0px 0px 40px calc((100% - 980px) * 0);

    justify-self: start;
    align-self: start;
    overflow-wrap: break-word;
    pointer-events: none;
    text-align: start;
    > p {
      overflow-wrap: break-word;
      line-height: normal;
      font-size: 28px;
      margin-block: 0;
      margin: 0;
      font: normal normal normal 28px/1.4em 'open sans', sans-serif;
    }
  }

  > .image-container {
    display: flex;
    justify-content: flex-start;
  }

  > .line {
    border: 1px solid;
    width: 100%;
  }

  > .links-block {
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
      align-items: flex-start;
      width: 100%;
      gap: 10px;
      flex: 1;
      .title {
        font-size: 18px;
        font-weight: 600;
        position: relative;
        margin: 0px 0px 30px 0px;
        justify-self: start;
        align-self: start;
      }
      .links {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        width: 100%;
        .special {
          font-weight: 600;
          color: #00204c;
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
  text-decoration: none;
  vertical-align: baseline;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #00204c;
`;

export const FooterLink = styled.a`
  color: ${p => p.theme.text};
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  color: #00204c;
  :visited {
    color: #00204c;
  }
  :hover {
    /* color: #99ffff; */
  }
`;
