import { rotate180, rotate180rev } from '../../utils/keyframes';
import styled, { css } from 'styled-components';

type props = {
  like: boolean;
  themeToggled: string;
};
export const MovieCardParent = styled.div<props>`
  display: flex;
  align-content: center;
  padding: 10px;
  background-image: ${(p) => p.theme.movieHeader};
  border-radius: 60px;
  height: 100%;
  width: 100%;
  .group-pic {
    display: flex;
    flex: 1 0 70%;
    .parent {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      .container {
        height: 30px;
        width: 30px;
        display: flex;
      }
    }
  }
  .title {
    margin-left: 20px;
    font-weight: 700;
    font-size: 0.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.text};
    text-decoration: none;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .thread {
    font-weight: 550;
    font-size: 0.5em;
  }
  .capsule-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .capsule {
      box-shadow: inset 0 0 3px ${(p) => p.theme.text};
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      border-radius: 40px;
      height: 80%;
      margin-right: 10px;
      width: 170px;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      .likes {
        padding: 6px;
        background: ${(p) => p.like && ' #ff005d'};
        box-shadow: ${(p) =>
          p.like && `inset -2px 1px 5px 1px ${p.theme.text}`};
        transition: all 0.5s;
        .icon {
          color: ${(p) => p.like && p.theme.body};
        }
        span {
          color: ${(p) => p.like && p.theme.body};
        }
      }
      .comment {
        padding: 6px;
      }

      .theme-mode {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: inherit;
        flex: 1;
      }

      .likes,
      .comment {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        cursor: pointer;
        color: inherit;
        flex: 1;
        span {
          font-size: 0.8em;
          font-weight: 500;
          padding: 0 5px;
        }
      }
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    border-radius: 0px;
    .name {
      display: block;
      width: 50%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: auto;
      margin-bottom: auto;
    }
    .capsule-container {
      justify-content: flex-start;
      align-items: center;
      .capsule {
        border-radius: 0px;
        box-shadow: none;
        width: 100%;
      }
    }
  }
`;
