import styled from 'styled-components';

export const FeedParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 100%;
  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .text {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }
`;
