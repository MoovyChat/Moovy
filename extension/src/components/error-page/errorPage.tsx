import React, { MouseEventHandler, useState } from 'react';

import { EXT_URL } from '../../constants';
import { StyledErrorPage } from './errorPage.styles';
import { User } from '../../Utils/interfaces';
import { requestTypes } from '../../Utils/enums';
import { sliceAddUser } from '../../redux/slices/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useGetUserMutMutation } from '../../generated/graphql';

type props = {
  text: string;
};
const ErrorPage: React.FC<props> = ({ text }) => {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<string>('');
  const [, getUser] = useGetUserMutMutation();
  const refetchUser: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    chrome.runtime.sendMessage(
      { type: requestTypes.REFETCH_USER },
      function (response) {
        const userFromExtension = response as User;
        dispatch(sliceAddUser(userFromExtension));
        if (response) {
          getUser({ uid: userFromExtension.id }).then((res) => {
            const { error, data } = res;
            if (error) {
              setErr(() => 'Error: Unable to fetch user.');
            }
            if (data) {
              const _data = data.getUserMut as User;
              dispatch(sliceAddUser(_data));
            }
          });
        }
      }
    );
  };
  return (
    <StyledErrorPage>
      <div className="logo">
        <img src={`${EXT_URL}/Moovy/moovy-text-logo-white.webp`} alt="Moovy" />
      </div>
      <div className="text">{text}</div>
      <div className="refetch" onClick={refetchUser}>
        Refetch User details
      </div>
      {err && <div className="err text">{err}</div>}
    </StyledErrorPage>
  );
};

export default ErrorPage;
