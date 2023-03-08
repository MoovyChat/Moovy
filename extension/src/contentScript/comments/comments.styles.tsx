import styled from 'styled-components';

export const CommentList = styled.div`
  // exit from
  &.comment-transition-exit {
    background: #000fe3;
  }

  // exit to
  &.comment-transition-exit-active {
    background: red;
  }
`;

export const CommentsParent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
