import styled from 'styled-components';

export const ReplyWindowParent = styled.div`
  width: 100%;
  background-color: inherit; ;
`;

export const ReplyMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  .line {
    width: 30px;
    height: 1px;
    background: white;
    margin: auto 20px;
  }
  .replies-count {
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
