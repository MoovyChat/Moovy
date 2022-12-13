import { Outlet, useParams } from 'react-router-dom';
import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { User, useGetUserQuery } from '../../generated/graphql';
import { isServer, popupStates } from '../../constants';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import Loading from '../loading/loading';
import ProfileTemplate from './profileTemplate';
import { batch } from 'react-redux';

const DifferentProfile = () => {
  const { id } = useParams();
  let user = useRef<User | null>(null);
  const userFromRedux = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const isSameUser = id !== userFromRedux.id;
  const [{ error, fetching, data }] = useGetUserQuery({
    variables: { uid: id! },
    pause: isServer(),
  });

  const profilePicChangeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.IMAGE_POP_UP));
    });
  };
  const bgChangeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.BG_POP_UP));
    });
  };

  const editProfileHandler: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.EDIT_PROFILE));
    });
  };

  useEffect(() => {
    if (error) console.log(error);
    user.current = data?.getUser as User;
  }, [fetching, id]);

  if (fetching || !user)
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Loading />
    </div>;
  return (
    <React.Fragment>
      {user && user.current && (
        <ProfileTemplate
          isDifferentUser={isSameUser}
          user={user.current}
          profilePicChangeHandler={profilePicChangeHandler}
          bgChangeHandler={bgChangeHandler}
          editProfileHandler={editProfileHandler}
        />
      )}
    </React.Fragment>
  );
};

export default DifferentProfile;
