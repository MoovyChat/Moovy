// Import necessary modules and functions
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import { Users } from '../../generated/graphql';
import { app } from '../../firebase';
import { randomUserNameGenerator } from '../../utils/helpers';

// Get the auth instance from Firebase and create a Google auth provider
const auth = getAuth(app);
var provider = new GoogleAuthProvider();

// Define a function that signs in a user using Google OAuth authentication
export const googleSignIn = (): Promise<Users> => {
  // Wrap the sign-in process in a Promise to allow it to be called asynchronously
  return new Promise((resolve, reject) => {
    // Call the Firebase signInWithPopup method with the auth and provider objects
    signInWithPopup(auth, provider)
      .then(result => {
        // If sign-in is successful, extract the access token and user information
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          throw new Error('Login failed');
        }
        const token = credential.accessToken;
        const user = result.user;
        // If user information is not available, throw an error
        if (!user) throw new Error('User not found');
        // Construct a Users object with the user information and resolve the Promise
        const adjustToState: Users = {
          id: user.uid,
          name: user.displayName!,
          nickname: randomUserNameGenerator(user.displayName!.split(' ')[0]),
          email: user.email!,
          photoUrl: user.photoURL!,
        };
        resolve(adjustToState);
      })
      .catch(error => {
        // If an error occurs during sign-in, log it to the console and reject the Promise
        console.error(error);
        reject(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
};
