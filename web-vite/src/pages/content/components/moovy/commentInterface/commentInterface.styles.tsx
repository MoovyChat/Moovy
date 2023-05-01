import styled from "styled-components";
import { commentStyleMixin } from "../../../../../helpers/mixins";

export const CommentCardContainer = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 2px 0px;
  border-radius: 15px;
  position: relative;
  padding: 5px 0;
  padding-left: 2%;
  cursor: pointer;

  .card-parent {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    :hover {
      filter: drop-shadow(2px 4px 6px);
    }
  }

  // Enter from
  &.css-cmt-transition-enter {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
  //Enter to
  &.css-cmt-transition-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit from
  &.css-cmt-transition-exit {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit to
  &.css-cmt-transition-exit-active {
    background-color: #ff005d;
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`;

type cardProps = {
  deleteFlag: boolean;
  hovered: boolean;
  like: boolean;
};
export const Card = styled.div<cardProps>`
  position: relative;
  width: 100%;
  min-height: 50px;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  .profile {
    display: flex;
    width: 40px;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-top: 5px;
  }
  .container {
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
  }
  .like {
    flex-basis: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 10px;
  }
`;

type props = {
  profilePic: string | null | undefined;
};
export const Profile = styled.div<props>`
  display: inline-block;
  height: 25px;
  width: 25px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  background: url("${(p) => p.profilePic}");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
export const Comment = styled.div`
  width: 90%;
  padding: 1px 4px;
  font-size: 12px;
  word-break: break-all;
  .cmt-tool-tip-container {
    margin: 2px;
    display: flex;
    .tooltip-wrapper {
      margin-right: 4px;
    }
  }
  .username {
    font-weight: 800;
    margin-right: 0 4px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

type likeProps = {
  accentColor: string;
};
export const Like = styled.div<likeProps>`
  position: relative;
  display: flex;
  align-items: center;
  float: right;
  height: 100%;
  cursor: pointer;
  z-index: 10;
  .like-icon {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  :focus,
  :hover {
    cursor: pointer;
    color: ${(p) => p.accentColor};
    .like-icon {
      box-shadow: inset 0 0 5px ${(p) => p.accentColor};
    }
  }
  :active {
    transform: rotate(0.1deg) scale(1);
    transition: transform 0.25s cubic-bezier(0.5, 400, 0.5, -400);
  }
  .fill {
    color: ${(p) => p.accentColor};
  }
`;
export const Stats = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  color: inherit;
  .timestamp {
    font-size: 10px;
    margin-left: 5px;
  }
  .likes,
  .delete {
    margin: 0px 15px;
  }
  .likes,
  .replies,
  .delete {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const SpoilerTag = styled.span`
  filter: blur(2px);
  background-color: red;
  color: white;
  transition: filter 0.2s linear;
  margin: 0 5px;
  border-radius: 5px;
  padding: 1px 4px;
  cursor: pointer;
  :hover {
    filter: none;
  }
`;

export const MessageParent = styled.span`
  white-space: pre-line;
  word-break: break-word;
  .one-emoji {
    font-size: 30px;
  }
  .time,
  .user {
    ${commentStyleMixin()};
    :hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

type deleteProps = {
  deleteFlag: boolean;
  accentColor: string;
};
export const Delete = styled.div<deleteProps>`
  position: relative;
  z-index: 3;
  background-color: ${(p) => p.accentColor};
  display: flex;
  max-width: 0px;
  align-items: center;
  justify-content: center;
  max-width: ${(p) => (p.deleteFlag ? "30px" : "0px")};
  transition: all 0.5s linear;
  :hover {
    cursor: pointer;
  }
`;

type ModProps = {
  color: string;
};
export const Moderation = styled.div<ModProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.color};
  border: 1px solid ${(p) => p.color};
  padding: 0 5px;
  margin-top: 5px;
  width: 80%;
  svg {
    margin: 5px;
  }
`;
