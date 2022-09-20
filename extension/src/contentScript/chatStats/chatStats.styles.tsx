import { globalUIStyles } from '../../Utils/interfaces';
import styled from 'styled-components';

type props = {
  styles?: globalUIStyles;
};
export const ChatStatContainer = styled.div<props>`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  height: 5%;
  color: inherit;
  .likes,
  .comment,
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: inherit;
  }
  * > h4 {
    padding: 2px 3px;
    font-size: 1.3em;
  }
`;

export const EditNickNameInput = styled.input`
  color: inherit;
  border: none;
  border-bottom: 1px solid white;
  background: none;
  font-size: 10px;
`;
