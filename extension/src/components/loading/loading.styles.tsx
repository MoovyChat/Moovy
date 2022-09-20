import styled from 'styled-components';

export const LoaderParent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .loading {
    animation: moveEyeSkew 5s ease-in-out infinite;
    background-color: radial-gradient(circle at 100px 100px, #5cabff, #000);
  }

  @keyframes moveEyeSkew {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;
