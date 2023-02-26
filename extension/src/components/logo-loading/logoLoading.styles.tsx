import styled from 'styled-components';

export const StyledSplashScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 99vw;
  height: 99vh;
  gap: 15px;
  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .fetch-movie {
    padding: 8px 15px;
    border-radius: 18px;
    font-size: 1.4em;
    box-shadow: 0 0 4px, inset 0 0 3px;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 5px, inset 0 0 5px;
    }
  }
  .loading {
  }
`;
