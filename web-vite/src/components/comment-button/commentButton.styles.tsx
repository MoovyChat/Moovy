import styled from 'styled-components';

type props = {
  isOpen: boolean;
};
export const CommentIcon = styled.div<props>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  left: 69%;
  bottom: 5%;
  background-color: #6d0e85;
  box-shadow: inset 0 0 7px black, 0 0 5px;
  cursor: pointer;
  transition: all 0.4s;
  svg {
    fill: white;
  }
  :hover {
    box-shadow: inset 0 0 5px black, 0 0 12px;
  }
  :active {
    box-shadow: inset 0 0 10px black, 0 0 5px;
  }
`;
