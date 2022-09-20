import { commentStyleMixin } from '../../Utils/mixins';
import { globalUIStyles } from '../../Utils/interfaces';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type commentCardProps = {
  styles: globalUIStyles;
};
export const CommentCardContainer = styled.div<commentCardProps>`
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 2px 0px;
  border-radius: 15px;
  position: relative;
  .card-parent {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    box-shadow: inset 4px 0 0 gold;
    background-color: ${(p) =>
      p.styles ? p.styles.backgroundColor : 'inherit'};
  }
`;

type cardProps = {
  deleteFlag: boolean;
  hovered: boolean;
  styles: globalUIStyles;
};
export const Card = styled.div<cardProps>`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 50px;
  z-index: 1;
  align-items: center;
  justify-content: flex-end;
  box-shadow: ${(p) => (p.hovered ? 'inset 2px 0px 0px gold' : 'none')};
  background-color: ${(p) => (p.styles ? p.styles.backgroundColor : 'inherit')};
  animation: ${(p) =>
    p.deleteFlag ? 'slideCard 0.5s linear forwards' : 'none'};
  .profile {
    display: flex;
    width: 40px;
    justify-content: center;
    align-items: center;
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
    justify-content: flex-end;
  }
  @keyframes slideCard {
    0% {
      right: 0;
      animation-timing-function: ease-out;
    }
    80% {
      right: 40px;
      animation-timing-function: ease-out;
    }
    90% {
      right: 35px;
      animation-timing-function: ease-in;
    }
    100% {
      right: 30px;
      animation-timing-function: ease-in;
    }
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
    transform: scale(1.1);
    color: #ff005d;
  }
  :active {
    transform: scale(1);
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
  background-color: #5c5c5c;
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

export const ReplyParent = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: flex-end;
  .reply-status {
    align-self: left;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
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
  visibility: ${(p) => (p.deleteFlag ? 'visible' : 'hidden')};
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
