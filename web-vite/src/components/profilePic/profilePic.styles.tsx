import styled from 'styled-components';

export const ProfilePicParent = styled.div`
  display: inline-block;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  :hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
