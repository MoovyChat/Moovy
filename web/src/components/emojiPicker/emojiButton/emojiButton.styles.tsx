import styled from 'styled-components';

export const EmojiButtonParent = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 0 0 10%;
  button {
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    overflow: hidden;
    position: relative;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    :hover {
      transform: scale(1.1);
      animation: smile 1s ease-in-out infinite;
      cursor: pointer;
    }
  }

  @keyframes smile {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
