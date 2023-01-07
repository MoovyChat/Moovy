import { rotate180, rotate180rev } from '../../utils/keyframes';
import styled, { css } from 'styled-components';

export const CommentParent = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    .heading,
    .sort {
      padding: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .heading {
    }
  }
  .child {
    height: calc(100% - 40px);
    width: 95%;
    overflow: auto;
    .extra {
      display: flex;
      max-height: 120px;
      justify-content: center;
      align-items: center;
    }
  }
`;

type props = {
  like: boolean;
  themeToggled: string;
};
export const CommentGroupParent = styled.div<props>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0px;
  .movie {
    width: 100%;
    display: flex;
  }
  .comments {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 99.9%;
    border-radius: 20px;
    box-shadow: inset 0 0 5px 1px;
    max-height: 40vh;
    overflow: hidden;
    .comments-child {
      display: block;
      position: relative;
      flex-direction: column;
      align-items: flex-end;
      height: 100%;
      width: 90%;
      margin: 4px 0;
      border-radius: 20px;
      overflow: auto;
      /* ::-webkit-scrollbar {
        display: none;
      } */
    }
  }
  @media (max-width: 900px) {
    .comments {
      border-radius: 0px;
    }
  }
`;