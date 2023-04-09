import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { Users } from '../generated/graphql';
import { app } from '../firebase';
import { randomUserNameGenerator } from './utilities';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const googleSignIn = (): Promise<Users> => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          throw new Error('Login failed');
        }
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (!user) throw new Error('User not found');
        const adjustToState: Users = {
          id: user.uid,
          name: user.displayName!,
          nickname: randomUserNameGenerator(user.displayName!.split(' ')[0]),
          email: user.email!,
          photoUrl: user.photoURL!,
        };
        resolve(adjustToState);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });
};
