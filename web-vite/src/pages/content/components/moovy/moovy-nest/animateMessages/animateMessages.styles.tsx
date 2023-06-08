import styled from "styled-components";

export const StyledAnimatedMessages = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: transparent;
  z-index: 1;
`;

export const StyledMessages = styled.div`
  animation: slide-in 3s forwards, fade-out 0.5s 2.5s forwards;
  position: absolute;
  bottom: 0;
  padding: 10px 20px;
  font-size: 14px;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  align-items: center;
  .profile-pic {
    width: 30px;
    height: 30px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .nest-msg {
    background: #0044a2;
    border-radius: 18px;
    padding: 10px;
  }
  .one-emoji {
    font-size: 40px;
  }
  .leave {
    background: #760117;
  }
  .join {
    background: #116600;
  }
  .gif-container {
    background: none;
    padding: 0px;
    border-radius: 0px;
    .gif-msg {
      width: 200px;
      border-radius: 18px;
    }
  }
  @keyframes slide-in {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-300px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
