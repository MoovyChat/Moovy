import styled from 'styled-components';

export const WithOutLoginWindow = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-height: 600px;
  width: 300px;
  display: center;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  gap: 10px;
  .login-agreement {
    color: white;
    font-size: 10px;
    text-align: center;
    margin: 10px 0px;

    .help{
      display: flex;
      gap:10px;
      justify-content: center;
      align-items: center;
      border: 1px solid white;
      padding: 10px;
    }
  }

  .login-agreement a {
    color: blue;
    text-decoration: underline;
  }
`;
export const Welcome = styled.div`
  flex-basis: 20%;
  display: flex;
  align-items: flex-start;
  color: white;
  margin: 10px 0;
`;
export const ButtonParent = styled.div`
  width: 70%;
  flex-basis: 50%;
  margin-bottom: 5px;
`;