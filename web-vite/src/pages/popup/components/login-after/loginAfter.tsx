import React, { useEffect } from "react";

import { UserCredential } from "firebase/auth";

import { randomUserNameGenerator } from "../../utils";

import { withUrqlClient } from "next-urql";
import { User } from "../../../../helpers/interfaces";
import { setStoredUserLoginDetails } from "../../../../helpers/storage";
import {
  useCreateUserMutation,
  useGetUserQuery,
} from "../../../../generated/graphql";
import { isServerSide } from "../../../../helpers/constants";
import { urqlClient } from "../../../../helpers/urql/urqlClient";
import Loading from "../../../../components/loading/loading";

interface loginAfterProps {
  setUser: (user: User) => void;
  userFromAuth: UserCredential;
}

const LoginAfter: React.FC<loginAfterProps> = ({ setUser, userFromAuth }) => {
  const setUserToStore = (user: User, setUser: (user: User) => void) => {
    // Store it in the Chrome storage.
    setStoredUserLoginDetails(user).then(() => {
      setTimeout(() => {
        // Sets user to the state.
        setUser(user);
        // Send a flag to content script, when the user is successfully set.
      }, 5000);
    });
  };
  const [, createUser] = useCreateUserMutation();
  const [{ data, fetching }, _] = useGetUserQuery({
    variables: {
      uid: userFromAuth.user.uid,
    },
    pause: isServerSide(),
  });
  useEffect(() => {
    if (!fetching) {
      const { uid, email, displayName, photoURL } = userFromAuth.user;
      if (!uid || !email || !displayName || !photoURL) return;
      const nickName = displayName?.split(" ")[0];
      const user: User = {
        name: displayName,
        email: email,
        photoUrl: photoURL,
        nickname: randomUserNameGenerator(nickName),
        id: uid,
      };
      // User doesn't exist in the database yet.
      if (!data || data.getUser === null) {
        createUser({
          options: user as any,
        })
          .then(() => {
            setUserToStore(user, setUser);
            chrome.windows.getCurrent((w) => {
              chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
                tabs[0].id &&
                  chrome.tabs.sendMessage(tabs[0].id, {
                    user: user,
                    from: "withOutLogin",
                  });
              });
            });
          })
          .catch(() => {
            //Error block
          });
      } else {
        setUserToStore(data.getUser as any, setUser);
      }
    }
  }, [data, userFromAuth, fetching]);

  return (
    <div style={{ color: "white" }}>
      <p>Singing In</p>
      <Loading />
      <p>Do not close this window</p>
    </div>
  );
};

export default withUrqlClient(urqlClient)(LoginAfter);
