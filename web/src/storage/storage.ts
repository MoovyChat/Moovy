import { Users } from '../generated/graphql';

// Used to communicate data between popup and content script
export interface LocalStorage {
  user?: Users;
}
export type LocalStorageKeys = keyof LocalStorage;

export function setStoredUserLoginDetails(user: Users): Promise<void> {
  const val: LocalStorage = {
    user,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(val, () => {
      resolve();
    });
  });
}

export function getStoredUserLoginDetails(): Promise<Users> {
  const keys: LocalStorageKeys[] = ['user'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.user ?? []);
    });
  });
}
