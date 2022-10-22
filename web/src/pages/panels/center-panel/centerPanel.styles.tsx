import styled from 'styled-components';

export const CenterParent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 1px solid;
  overflow: hidden;
  .textarea-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 10%;
  }
  .comment-section {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    overflow: auto;
  }
`;
