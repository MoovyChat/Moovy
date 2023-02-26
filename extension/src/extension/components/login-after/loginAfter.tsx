import React, { useEffect } from 'react';
import {
  useCreateUserMutation,
  useGetUserQuery,
} from '../../../generated/graphql';

import { User } from '../../../Utils/interfaces';
import { UserCredential } from 'firebase/auth';
import { isServerSide } from '../../../constants';
import { setStoredUserLoginDetails } from '../../../Utils/storage';
import { urqlClient } from '../../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

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
  const [_userResult, createUser] = useCreateUserMutation();
  const [{ data, error, fetching }, _] = useGetUserQuery({
    variables: {
      uid: userFromAuth.user.uid,
    },
    pause: isServerSide(),
  });
  useEffect(() => {
    if (error) console.log(error);
    if (!fetching) {
      const { uid, email, displayName, photoURL } = userFromAuth.user;
      const nickName = displayName?.split(' ').pop();
      let user: User = {
        name: displayName!,
        email: email!,
        photoUrl: photoURL!,
        nickname: nickName!,
        id: uid,
      };
      // User doesn't exist in the database yet.
      if (!data || data!.getUser === null) {
        createUser({
          options: user as any,
        })
          .then((res) => {
            const { data, error } = res;
            if (error) console.log(error);
            setUserToStore(user, setUser);
            chrome.windows.getCurrent((w) => {
              chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
                chrome.tabs.sendMessage(
                  tabs[0].id!,
                  { user: user, from: 'withOutLogin' },
                  (response) => {
                    console.log(response);
                  }
                );
              });
            });
          })
          .catch((err: any) => {
            console.log('ERR: Unable to create user', err);
          });
      } else {
        setUserToStore(data!.getUser as any, setUser);
      }
    }
  }, [data, userFromAuth, fetching]);

  return <div style={{ color: 'white' }}>Singing In</div>;
};

export default withUrqlClient(urqlClient)(LoginAfter);
