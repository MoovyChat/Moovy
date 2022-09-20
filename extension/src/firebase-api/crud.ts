import {
  DocumentData,
  Unsubscribe,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocFromCache,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { AnyAaaaRecord } from 'dns';
import { db } from '../firebase';

// Adding the document to the firestore db
export const create = async (id: string, newData: any, collection: string) => {
  const docRef = doc(db, collection, id);
  const setStatus = await setDoc(docRef, newData);
  return setStatus;
};

// Get data from the firestore db
export const get = async (
  id: string,
  collectionPath: string
): Promise<[DocumentData, Unsubscribe]> => {
  return new Promise((resolve, reject) => {
    let unSub: Unsubscribe = onSnapshot(
      doc(db, collectionPath, id),
      { includeMetadataChanges: true },
      (doc) => {
        resolve([doc.data()!, unSub]);
      }
    );
  });
};

// Update the data in the firestore db
export const update = async (
  id: string,
  collectionPath: string,
  newData: any
) => {
  const docRef = doc(db, collectionPath, id);
  const updateStatus = await updateDoc(docRef, newData);
  return updateStatus;
};

// Deleting the data from the firestore db
export const deleteData = async (id: string, collectionPath: string) => {
  const docRef = doc(db, collectionPath, id);
  const deleteStatus = await deleteDoc(docRef);
  return deleteStatus;
};
