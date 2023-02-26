import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';

import { User } from '../../generated/graphql';
import { app } from '../../firebase';

const auth = getAuth(app);
var provider = new GoogleAuthProvider();

export const googleSignIn = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    // .then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   if (!credential) {
    //     throw new Error('Login failed');
    //   }
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   const user = result.user;
    //   if (!user) throw new Error('User not found');
    //   const adjustToState: User = {
    //     id: user.uid,
    //     name: user.displayName!,
    //     nickname: user.displayName!,
    //     email: user.email!,
    //     photoUrl: user.photoURL!,
    //   };
    //   resolve(adjustToState);
    // })
    // .catch((error) => {
    //   console.error(error);
    //   reject(error);
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  });
};
