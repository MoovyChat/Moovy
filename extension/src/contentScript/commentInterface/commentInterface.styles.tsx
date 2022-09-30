import { commentStyleMixin } from '../../Utils/mixins';
import { globalUIStyles } from '../../Utils/interfaces';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type commentCardProps = {
  styles: globalUIStyles;
};
export const CommentCardContainer = styled.div<commentCardProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 2px 0px;
  border-radius: 15px;
  position: relative;
  padding: 5px 0;
  padding-left: 2%;
  .card-parent {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

type cardProps = {
  deleteFlag: boolean;
  hovered: boolean;
  styles: globalUIStyles;
  like: boolean;
};
export const Card = styled.div<cardProps>`
  position: relative;
  width: 100%;
  min-height: 50px;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  /* justify-content: flex-end; */
  /* box-shadow: ${(p) => (p.like ? 'inset 0 0 10px #ff005d' : 'none')}; */
  /* box-shadow: ${(p) => (p.hovered ? 'inset 2px 0px 0px gold' : 'none')}; */
  /* animation: ${(p) =>
    p.deleteFlag ? 'slideCard 0.5s linear forwards' : 'none'}; */
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
    overflow: hidden;
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
  background: url('${(p) => p.profilePic}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
export const Comment = styled.div`
  width: 90%;
  padding: 1px 4px;
  font-size: 12px;
  word-break: break-all;
  .username {
    font-weight: 800;
    margin-right: 0 4px;
  }
`;

export const Like = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  float: right;
  height: 100%;
  cursor: pointer;
  z-index: 10;
  :focus,
  :hover {
    cursor: pointer;
    color: #ff005d;
  }
  :active {
    transform: rotate(0.1deg) scale(1);
    transition: transform 0.25s cubic-bezier(0.5, 400, 0.5, -400);
  }
  .fill {
    color: #ff005d;
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
export const Reply = styled.div`
  position: relative;
`;
type spoilerProps = {
  showSpoiler: boolean;
};
export const SpoilerTag = styled.span<spoilerProps>`
  color: ${(p) => (p.showSpoiler ? 'inherit' : '#5c5c5c')};
  margin: 0 5px;
  border-radius: 5px;
  padding: 1px 4px;
  cursor: pointer;
`;

export const MessageParent = styled.span`
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

export const Delete = styled.div<cardProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  background-color: #ff005d;
  display: flex;
  width: 40px;
  height: 100%;
  justify-content: flex-end;
  padding-right: 5px;
  align-items: center;
  /* visibility: ${(p) => (p.deleteFlag ? 'visible' : 'hidden')}; */
  :hover {
    cursor: pointer;
  }
`;

export const UserToolTip = styled.div`
  position: absolute;
  color: blueviolet;
  background: white;
  top: -30px;
  z-index: 99999;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
`;
