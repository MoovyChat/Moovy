import {
  DocumentData,
  Unsubscribe,
  arrayUnion,
  increment,
} from 'firebase/firestore';
import { create, deleteData, get, update } from './crud';

import { CommentCollection } from './constants';
import { CommentInfo } from '../Utils/interfaces';
import { updateMovieInFirebase } from './movie';
import { updateUser } from './user';

// Adding the Comment - Adding the new comment to the 'comment' collection in the
// firestore db
export const addCommentToFirebaseCommentsCollection = (
  comment: CommentInfo,
  movieId: string,
  userId: string
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const setStatus = create(comment.cid!, comment, CommentCollection(movieId));
    setStatus
      .then((res) => {
        // Increment comment count in movie document.
        updateMovieInFirebase(movieId, { commentsCount: increment(1) })
          .then((res) => {
            // Add the comment reference to the user's comment array.
            updateUser(userId, { comments: arrayUnion(comment.cid!) })
              .then(() => {})
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(`ERR: Failed registering ${comment.cid} as a comment`);
      });
  });
};

// Get single comment data from the firestore db
export const getComment = (
  commentId: string,
  movieId: string
): Promise<[DocumentData, Unsubscribe]> => {
  return new Promise(async (resolve, reject) => {
    const getSnap = get(commentId, CommentCollection(movieId));
    getSnap
      .then((res) => {
        // Set the movieData to redux
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
// Update the comment in the firestore db
// No need to send the whole User as a parameter, We just need to send the
// field which needs to be updated. 'newUserData' needs to be an object.
export const updateComment = (
  commentId: string,
  newCommentData: {},
  movieId: string
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const updateStatus = update(
      commentId,
      CommentCollection(movieId),
      newCommentData
    );
    updateStatus
      .then(() => resolve())
      .catch((err) => reject(`ERR: Unable to update ${commentId}'s data`));
  });
};

// Deleting the comment from the firestore db
export const deleteComment = (
  commentId: string,
  movieId: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    deleteData(commentId, CommentCollection(movieId))
      .then(() => resolve())
      .catch((err) => reject(`ERR: Unable to delete ${commentId}'s data`));
  });
};

export const getTotalRepliesCount = (comment: CommentInfo): Promise<number> => {
  // Update the replies count to the redux.
  return new Promise((resolve, reject) => {
    const _commentDoc = getComment(comment.cid!, comment.movieId!);
    _commentDoc.then((res) => {
      console.log(res);
      if (res[0] !== undefined) {
        let commentData = res[0].data() as CommentInfo;
        console.log('CHECKING COMMENT', commentData);
        // if (commentData.repliesCount !== commentData.replies?.length) {
        //   console.log('ERR: Replies count mismatch');
        // }
        let repliesCount = 0;
        resolve(repliesCount);
      }
      reject(404);
    });
  });
};
