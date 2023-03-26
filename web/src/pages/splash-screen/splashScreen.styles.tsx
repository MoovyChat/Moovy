import styled from 'styled-components';

export const StyledSplashScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99vh;
  font-family: 'Convergence, sans-serif';
  gap: 15px;
  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .loading {
  }
`;
