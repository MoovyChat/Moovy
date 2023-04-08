/// <reference types="chrome"/>
import { Users } from '../generated/graphql';

// Used to communicate data between popup and content script
export interface LocalStorage {
  user?: Users;
}
export type LocalStorageKeys = keyof LocalStorage;
