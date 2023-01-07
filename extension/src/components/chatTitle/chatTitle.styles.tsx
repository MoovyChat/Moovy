import { rotate } from '../../styles/keyframes';
import styled from 'styled-components';

export const ChatTitleParent = styled.div`
  opacity: 1;
  text-align: center;
  font-size: 1.3em;
  word-wrap: break-word;
  font-weight: bold;
  font-family: 'Lexend', sans-serif;
  padding: 20px 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .logo {
    grid-area: 1 / 1 / 2 / 2;
    width: 25px;
    height: 25px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .title {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    grid-area: 1 / 3 / 2 / 4;
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    display: -webkit-inline-box;
    cursor: pointer;
    filter: drop-shadow(0 0 1px ${(p) => p.theme.text});
    box-shadow: inset 0 0 1px ${(p) => p.theme.text};
    border-radius: 10px;
    max-width: 70px;
    color: ${(p) => p.theme.text};
    .fav-count {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .box {
        position: relative;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .star {
      :hover {
        animation: ${rotate} 1s ease-in-out reverse;
        transform: scale(1.05);
      }
      :active {
        transform: scale(0.95);
      }
    }
  }
`;
