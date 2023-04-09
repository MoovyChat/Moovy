import styled from 'styled-components';

export const StyledEmbedContent = styled.div`
  width: 100%;
  min-height: 100px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c034c0;
  padding: 0 5px;
  div {
    text-align: center;
  }
  /* .arc-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    ::before {
    }
    :hover {
      ::before {
        content: '';
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 200px;
        height: 200px;
        background-image: url('https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80');
        background-size: cover;
        animation: particles 1s ease-in-out;
      }
    }

    @keyframes particles {
      0% {
        transform: translate(-50%, -50%) scale(0.4);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }
  } */
`;
