import {
  DocumentData,
  Unsubscribe,
  arrayRemove,
  arrayUnion,
} from 'firebase/firestore';
import { UserCollection, UserNameCollection } from './constants';
import { create, deleteData, get, update } from './crud';

import { User } from '../Utils/interfaces';

// Creating the user - Adding the new user to the 'user' collection in the
// firestore db
export const createUser = (user: User): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    // // tslint:disable-next-line:no-console
    const setStatus = create(user.uid, user, UserCollection);
    setStatus
      .then((res) => resolve(res))
      .catch((err) => reject(`ERR: Failed registering ${user.name} as a user`));
  });
};

// Get user data from the firestore db
export const getUser = (
  userId: string
): Promise<[DocumentData, Unsubscribe]> => {
  return new Promise(async (resolve, reject) => {
    const getSnap = get(userId, UserCollection);
    getSnap
      .then((res) => {
        // Set the userData to redux
        if (res[0] === undefined) reject('User not available');
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

// Update the user in the firestore db
// No need to send the whole User as a parameter, We just need to send the
// field which needs to be updated. 'newUserData' needs to be an object.
export const updateUser = (userId: string, newUserData: {}): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const updateStatus = update(userId, UserCollection, newUserData);
    updateStatus
      .then((res) => resolve())
      .catch((err) => reject(`ERR: Unable to update ${userId}'s data`));
  });
};

// Deleting the user from the firestore db
// We will not be giving this feature to the user. User needs to request for
// Account deletion.
export const deleteUser = (userId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    deleteData(userId, UserCollection)
      .then(() => resolve())
      .catch((err) => reject(`ERR: Unable to delete ${userId}'s data`));
  });
};

export const setFavorite = (userId: string, movieId: string): Promise<void> => {
  return updateUser(userId, { favorites: arrayUnion(movieId) });
};

export const removeFavorite = (userId: string, movieId: string) => {
  return updateUser(userId, { favorites: arrayRemove(movieId) });
};

export const addUserNameToCollection = (
  nickname: string,
  uid: string
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const setStatus = create(nickname, { uid }, UserNameCollection);
    setStatus
      .then((res) => resolve(res))
      .catch((err) =>
        reject(`ERR: Failed registering ${nickname} as for user ${uid}`)
      );
  });
};

export const getUserNameFromCollection = (
  nickname: string
): Promise<[DocumentData, Unsubscribe]> => {
  return new Promise(async (resolve, reject) => {
    const getSnap = get(nickname, UserNameCollection);
    getSnap
      .then((res) => {
        // Set the userData to redux
        if (res[0] === undefined) reject('Username not available');
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
