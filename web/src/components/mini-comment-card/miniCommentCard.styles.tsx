import styled from 'styled-components';

type props = {
  cardHeight?: string;
  showMore?: boolean;
};
export const StyledMiniCommentCard = styled.div<props>`
  display: flex;
  position: relative;
  width: 100%;
  max-height: ${(p) => (p.showMore ? p.cardHeight : '100px')};
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 1px;
  border-radius: 18px;
  transition: max-height 0.3s;
  .photo {
    align-self: flex-start;
    margin-top: 10px;
    width: 40px;
    height: 40px;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 50px);
    padding-bottom: 15px;
    height: 100%;
    .name {
      font-size: 0.9em;
      font-weight: 600;
      margin-top: 10px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      .time {
        font-size: 0.6em;
      }
    }
    .msg {
      display: block;
      font-size: 0.8em;
      margin-top: 10px;
      margin-left: 10px;
      white-space: pre-line;
      padding-bottom: 10px;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    .show-more {
      font-weight: 600;
      font-size: 0.8em;
      color: ${(p) => p.theme.mention};
    }
  }
`;
