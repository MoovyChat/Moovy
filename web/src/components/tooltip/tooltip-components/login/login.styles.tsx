import styled from 'styled-components';

export const LoginParent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: inset 0 0 5px ${(p) => p.theme.background};
  transition: all 1s;
  background: ${(p) => p.theme.text};
  .login-btn {
    width: 60%;
    height: 60%;
    padding: 2px 5px;
    display: flex;
    color: black;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    .icon {
      font-size: 30px;
      transition: all 1s;
    }
    .title {
      font-size: 0.75rem;
      transition: all 1s;
      color: ${(p) => p.theme.background};
    }
  }
  :hover {
    .login-btn {
      .icon {
        font-size: 25px;
      }
      .title {
        font-size: 1rem;
      }
    }
  }
`;
