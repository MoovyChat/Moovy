import styled from 'styled-components';

type props = {
  src: string;
};
export const ProfilePicParent = styled.div<props>`
  display: inline-block;
  display: flex;
  justify-content: center;
  background: url('${(p) => p.src}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  transition: all 200ms;
  :hover {
    cursor: pointer;
  }
`;
