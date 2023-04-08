import styled from 'styled-components';

export const StyledGoogleLogin = styled.div`
  height: 640px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;

  .logo {
    margin-bottom: 20px;
    img {
      height: 50px;
    }
  }

  .popup-spl-btn {
    padding: 10px 20px;
    border: none;
    background-color: #4285f4;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #357ae8;
    }
  }

  .bubble-container {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    .bubble {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      animation: bubble 8s infinite;

      img {
        width: 45px;
        height: 45px;
        object-fit: contain;
        border-radius: 50%;
      }
    }

    .bubble:nth-child(1) {
      animation-delay: 0s;
    }

    .bubble:nth-child(2) {
      animation-delay: 2s;
    }

    .bubble:nth-child(3) {
      animation-delay: 4s;
    }

    .bubble:nth-child(4) {
      animation-delay: 6s;
    }
  }

  @keyframes bubble {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  .text-msg {
    position: absolute;
    font-size: 10px;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }

  .text-msg div:first-child {
    font-weight: 700;
  }

  .text-msg div:last-child {
  }

  .text-msg a {
    color: #ffffff;
    text-decoration: underline;
  }
`;
