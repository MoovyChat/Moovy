import './commentCard.css';

import { CardParent } from './commentCard.styles';
import { shine } from '../../utils/keyframes';
import styled from 'styled-components';

const StyledCardLoader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 99.5%;
  min-height: 120px;
  justify-content: space-evenly;
  align-items: 'center';
  background-color: transparent;
  overflow: hidden;
  margin: 10px 2px;
  box-shadow: 0 0 10px black, inset 0 0 5px white;
  font-size: 15px;
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
  }
`;

const CardTemplateLoader = () => {
  return (
    <StyledCardLoader>
      <div className='content'>
        <div className='user-pic'>
          <div className='pic-container'></div>
        </div>
        <div className='message'>
          <div className='username'>
            <div className='container'>
              <div className='user'></div>
            </div>
          </div>
          <div className='msg'></div>
        </div>
      </div>
      <div className='options'></div>
    </StyledCardLoader>
  );
};

export default CardTemplateLoader;
