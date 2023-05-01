import React, { MouseEventHandler, useState } from "react";

import { StyledErrorPage } from "./errorPage.styles";

import { useGetUserMutMutation } from "../../generated/graphql";
import { requestTypes } from "../../helpers/enums";
import { User } from "../../helpers/interfaces";
import { useAppDispatch } from "../../pages/redux/hooks";
import { sliceAddUser } from "../../pages/redux/slices/user/userSlice";
import { FULL_LOGO_TRANSPARENT } from "../../helpers/constants";

type props = {
  text: string;
};
const ErrorPage: React.FC<props> = ({ text }) => {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<string>("");
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
              setErr(() => "Error: Unable to fetch user.");
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
        <img src={FULL_LOGO_TRANSPARENT} alt="Moovy" />
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
