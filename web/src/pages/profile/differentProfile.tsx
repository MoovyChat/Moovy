import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Users, useGetUserByNickNameQuery } from '../../generated/graphql';
import { isServer, popupStates } from '../../constants';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import ProfileTemplate from './profileTemplate';
import { batch } from 'react-redux';
import usePageView from '../../hooks/usePageView';
import { useParams } from 'react-router-dom';

const DifferentProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<Users | null>(null);
  const userFromRedux = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const isSameUser = id !== userFromRedux.nickname;
  const [{ error, fetching, data }] = useGetUserByNickNameQuery({
    variables: { nickname: id! },
    pause: isServer(),
  });

  usePageView();

  const profilePicChangeHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.IMAGE_POP_UP));
    });
  };
  const bgChangeHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.BG_POP_UP));
    });
  };

  const editProfileHandler: MouseEventHandler<HTMLSpanElement> = e => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.EDIT_PROFILE));
    });
  };

  useEffect(() => {
    if (error) console.log(error);
    if (data) {
      setUser(() => data?.getUserByUserName as Users);
    }
  }, [fetching, data, error, id]);

  if (fetching) return <Loading />;
  if (error) {
    return <NotFound />;
  }
  return (
    <React.Fragment>
      {user && (
        <ProfileTemplate
          isDifferentUser={isSameUser}
          user={user}
          currentUser={userFromRedux}
          profilePicChangeHandler={profilePicChangeHandler}
          bgChangeHandler={bgChangeHandler}
          editProfileHandler={editProfileHandler}
        />
      )}
    </React.Fragment>
  );
};

export default DifferentProfile;
