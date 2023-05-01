import styled from 'styled-components';

type ButtonProps = {
  color: string;
  isFollowingUser?: boolean;
};
export const StyledButton = styled.div<ButtonProps>`
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background-color: #1c4ab0;
  :hover {
    cursor: pointer;
    background-color: ${(p) => (p.isFollowingUser ? 'transparent' : p.color)};
    box-shadow: ${(p) => p.isFollowingUser && 'inset 0 0 2px red'};
    color: ${(p) => p.isFollowingUser && 'red'};
  }
`;
