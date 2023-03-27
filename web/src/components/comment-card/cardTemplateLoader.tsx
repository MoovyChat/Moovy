import './commentCard.css';

import { shine } from '../../utils/keyframes';
import styled from 'styled-components';

const StyledCardLoader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99%;
  min-height: 120px;
  justify-content: space-evenly;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  box-shadow: inset 0 0 7px 0px ${(p) => p.theme.hoverColor};
  background: ${(p) =>
    ` linear-gradient(110deg, ${p.theme.trendingTiles} 8%, ${p.theme.hoverColor} 18%, ${p.theme.trendingTiles} 33%)`};
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1s ${shine} linear infinite;
  pointer-events: none;
  :first-child {
    margin-top: 10px;
  }
  .content {
    display: flex;
    width: 95%;
    align-items: flex-start;
    font-size: 14px;
    padding-top: 10px;
    .user-pic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.loadingCard};
    }
    .message {
      display: flex;
      padding-left: 15px;
      width: calc(100% - 50px);
      flex-direction: column;
      justify-content: center;
      padding-bottom: 10px;
      gap: 10px;
      .username {
        width: 100px;
        height: 12px;
        background-color: ${({ theme }) => theme.loadingCard};
        border-radius: 18px;
      }
      .msg {
        width: 60%;
        height: 10px;
        background-color: ${({ theme }) => theme.loadingCard};
        border-radius: 18px;
      }
    }
  }
  .options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    font-weight: 600;
    .c {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin: 5px 0px;
      width: 50px;
      height: 20px;
      background-color: ${({ theme }) => theme.loadingCard};
      border-radius: 18px;
    }
  }
`;

const CardTemplateLoader = () => {
  return (
    <StyledCardLoader>
      <div className='content'>
        <div className='user-pic'></div>
        <div className='message'>
          <div className='username'></div>
          <div className='msg'></div>
          <div className='msg'></div>
        </div>
      </div>
      <div className='options'>
        <div className='c'></div>
        <div className='c'></div>
        <div className='c'></div>
      </div>
    </StyledCardLoader>
  );
};

export default CardTemplateLoader;
