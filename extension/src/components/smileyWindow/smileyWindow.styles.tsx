import styled from 'styled-components';

export const SmileyWindowParent = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 99%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 15;
  align-items: center;
  justify-content: center;
  .frequent-emojis {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    animation: slideFromTop 0.3s linear forwards;
  }

  @keyframes slideFromTop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
