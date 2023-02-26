import styled from 'styled-components';

export const StyledHomeCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex: 1 1 30%;
  .container {
    width: 250px;
    height: 100%;
    padding: 10px;
    box-shadow: 0 0 1px;
    .title {
      font-size: 16px;
      font-weight: 600;
    }
    .shc-img {
      width: 100%;
      height: 140px;
      margin: 10px 0;
      object-fit: contain;
    }
    .content {
      font-size: 13px;
      font-weight: 600;
      font-style: italic;
      opacity: 0.8;
    }
  }
`;
