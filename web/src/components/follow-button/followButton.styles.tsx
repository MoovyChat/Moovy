import styled from 'styled-components';

type ButtonProps = {
  color: string;
  isFollowingUser?: boolean;
};
export const StyledButton = styled.div<ButtonProps>`
  position: relative;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  background: transparent;
  box-shadow: inset 0 0 2px;

  :hover {
    cursor: pointer;
    background-color: ${p =>
      p.isFollowingUser ? 'transparent' : p.theme.body};
    color: ${p => p.isFollowingUser && 'red'};
  }
`;
