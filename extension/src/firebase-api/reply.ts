import {
  DocumentData,
  Unsubscribe,
  arrayUnion,
  increment,
} from 'firebase/firestore';
import { create, deleteData, get, update } from './crud';

import { CommentInfo } from '../Utils/interfaces';
import { ReplyCollection } from './constants';
import { updateComment } from './comment';
import { updateMovieInFirebase } from './movie';
import { updateUser } from './user';

// Adding the Reply - Adding the new reply to the 'reply' collection in the
// firestore db
export const addReplyToFirebaseReplyCollection = (
  reply: CommentInfo,
  movieId: string,
  type: string,
  userId: string
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const setStatus = create(
      reply.rid!,
      reply,
      ReplyCollection(movieId, reply.parentComment!)
    );
    setStatus
      .then(() => {
        if (type === 'comment') {
          // Once the reply is added to firebase, add the reply id to parent comment.
          updateComment(
            reply.parent!,
            { replies: arrayUnion(reply.rid!), repliesCount: increment(1) },
            movieId
          )
            .then(() => {
              // Increase reply count by 1 in the movie document.
              updateMovieInFirebase(movieId, { repliesCount: increment(1) })
                .then((res) => {
                  // Add the reply id to the user's replies array.
                  updateUser(userId, { replies: arrayUnion(reply.rid!) })
                    .then(() => {})
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
              resolve();
            })
            .catch((err) => console.log(err));
        } else {
          // Add reply to the reply object.
          updateReply(reply.parent!, reply.parentComment!, movieId, {
            replies: arrayUnion(reply.rid!),
            repliesCount: increment(1),
          })
            .then(() => {
              // Increment reply count by 1 in the movie document..
              updateMovieInFirebase(movieId, { repliesCount: increment(1) })
                .then((res) => {
                  // Add the reply id to the user's replies array.
                  updateUser(userId, { replies: arrayUnion(reply.rid!) })
                    .then(() => {})
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
              resolve();
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) =>
        reject(`ERR: Failed registering ${reply.rid!} as a reply`)
      );
  });
};

// Get reply data from the firestore db
export const getReplyFromFirestore = (
  replyId: string,
  commentId: string,
  movieId: string
): Promise<[DocumentData, Unsubscribe]> => {
  return new Promise(async (resolve, reject) => {
    const getSnap = get(replyId, ReplyCollection(movieId, commentId));
    getSnap.then((res) => resolve(res)).catch((err) => reject(err));
  });
};

// Update the Reply in the firestore db
// No need to send the whole User as a parameter, We just need to send the
// field which needs to be updated. 'newUserData' needs to be an object.
export const updateReply = (
  replyId: string,
  commentId: string,
  movieId: string,
  newReplyData: {}
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const updateStatus = update(
      replyId,
      ReplyCollection(movieId, commentId),
      newReplyData
    );
    updateStatus
      .then(() => resolve())
      .catch((err) => reject(`ERR: Unable to update ${replyId}'s data`));
  });
};

// Deleting the reply from the firestore db
export const deleteReply = (
  replyId: string,
  commentId: string,
  movieId: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    deleteData(replyId, ReplyCollection(movieId, commentId))
      .then(() => resolve())
      .catch((err) => reject(`ERR: Unable to delete ${replyId}'s data`));
  });
};
