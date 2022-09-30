import styled from 'styled-components';

export const ReplyWindowParent = styled.div`
  width: 95%;
  transform: scale(0.95);
  background-color: inherit;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  .reply-status {
    width: 100%;
    float: right;
    align-self: flex-end;
  }
`;

type replyParentProps = {
  replySection: boolean;
};
export const ReplyParent = styled.div<replyParentProps>`
  width: 95%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: flex-end;
  overflow: auto;
  max-height: ${(p) => (p.replySection ? '400px' : '0px')};
  transition: max-height ${(p) => (p.replySection ? 1 : 0.5)}s
    cubic-bezier(0.18, 0.89, 0.32, 1.28);
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

export const ShowReplyText = styled.div`
  padding: 5px 0;
  font-weight: 800;
  font-size: 1.1em;
  cursor: pointer;
`;
