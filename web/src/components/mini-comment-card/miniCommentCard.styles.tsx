import styled from 'styled-components';

type props = {
  cardHeight?: string;
  showMore?: boolean;
};
export const StyledMiniCommentCard = styled.div<props>`
  display: flex;
  position: relative;
  width: 100%;
  max-height: ${p => (p.showMore ? p.cardHeight : '100px')};
  justify-content: center;
  align-items: center;
  transition: max-height 0.3s;
  cursor: pointer;
  backdrop-filter: contrast(0.8);
  border-radius: 8px;
  overflow: hidden;
  .photo {
    align-self: flex-start;
    margin: 15px 5px 15px 15px;
    width: 40px;
    height: 40px;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 50px);

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
        opacity: 0.6;
      }
    }
    .msg {
      display: block;
      font-size: 0.8em;
      margin-top: 10px;
      margin-left: 10px;
      white-space: pre-line;
      padding-bottom: 10px;
      width: 98%;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    .show-more {
      font-weight: 600;
      font-size: 0.8em;
      color: ${p => p.theme.mention};
    }
  }
`;
