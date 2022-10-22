import { User } from '../utils/interfaces';

// Used to communicate data between popup and content script
export interface LocalStorage {
  user?: User;
}
export type LocalStorageKeys = keyof LocalStorage;

export function setStoredUserLoginDetails(user: User): Promise<void> {
  const val: LocalStorage = {
    user,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(val, () => {
      resolve();
    });
  });
}

export function getStoredUserLoginDetails(): Promise<User> {
  const keys: LocalStorageKeys[] = ['user'];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res) => {
      resolve(res.user ?? []);
    });
  });
}
