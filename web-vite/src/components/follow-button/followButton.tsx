import React, { useMemo, useState } from "react";

import {
  useIsFollowingUserQuery,
  useToggleFollowMutation,
} from "../../generated/graphql";

import { batch } from "react-redux";
import { isServerSide } from "../../helpers/constants";
import { iconsEnum } from "../../helpers/enums";
import { useAppDispatch, useAppSelector } from "../../pages/redux/hooks";
import {
  sliceSetToastBody,
  sliceSetToastVisible,
} from "../../pages/redux/slices/toast/toastSlice";
import { StyledButton } from "./followButton.styles";

type props = {
  userId: string;
  nickName: string;
};
const FollowButton: React.FC<props> = ({ userId, nickName }) => {
  const loggedUser = useAppSelector((state) => state.user);
  const isDifferentUser = loggedUser.id !== userId;
  const [followHovered, setFollowHovered] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [, toggleFollow] = useToggleFollowMutation();
  const dispatch = useAppDispatch();
  const [amIFollowingUser] = useIsFollowingUserQuery({
    variables: { uid: loggedUser.id, fid: userId },
    pause: isServerSide(),
  });

  useMemo(() => {
    const { data, fetching } = amIFollowingUser;
    if (!fetching && data) {
      const _data = data.isFollowingUser as boolean;
      setIsFollowing(() => _data);
    }
  }, [amIFollowingUser]);

  const toggleFollowHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
    toggleFollow({
      uid: loggedUser.id,
      followingId: userId,
      follow: !isFollowing,
    }).then((res) => {
      const { data } = res;
      const isFollowingRes = data?.toggleFollow?.follows;
      let icon = "";
      let message = "";
      if (isFollowingRes !== null && isFollowingRes !== undefined) {
        setIsFollowing(isFollowingRes);
        if (isFollowingRes) {
          icon = iconsEnum.PERSON_FOLLOW;
          message = `You are following ${nickName}`;
        } else {
          icon = iconsEnum.PERSON_UNFOLLOW;
          message = `You un-followed ${nickName}`;
        }
        batch(() => {
          dispatch(sliceSetToastVisible(true));
          dispatch(sliceSetToastBody({ icon, message }));
        });
      }
    });
  };
  return (
    <div
      className="follow"
      onMouseEnter={() => setFollowHovered(() => true)}
      onMouseLeave={() => setFollowHovered(() => false)}
    >
      {isDifferentUser && (
        <StyledButton
          className="follow-btn"
          color={isFollowing ? "#13dbde31" : "#de1328"}
          isFollowingUser={isFollowing}
          onClick={toggleFollowHandler}
        >
          {isFollowing ? (followHovered ? "UnFollow" : "Following") : "Follow"}
        </StyledButton>
      )}
    </div>
  );
};

export default FollowButton;
