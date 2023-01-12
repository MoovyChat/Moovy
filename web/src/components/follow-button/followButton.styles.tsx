import styled from 'styled-components';

type ButtonProps = {
  color: string;
  isFollowingUser?: boolean;
};
export const StyledButton = styled.div<ButtonProps>`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background: transparent;
  box-shadow: inset 0 0 2px white;

  :hover {
    cursor: pointer;
    background-color: ${(p) =>
      p.isFollowingUser ? 'transparent' : p.theme.body};
    color: ${(p) => p.isFollowingUser && 'red'};
  }
`;
