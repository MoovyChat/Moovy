import { DocumentData, Unsubscribe } from 'firebase/firestore';
import { create, deleteData, get, update } from './crud';

import { Movie } from '../Utils/interfaces';
import { MovieCollection } from './constants';

// Adding the new movie to the 'movies' collection in the firestore db
export const setMovieInfo = (movie: Movie): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const setStatus = create(movie.mid, movie, MovieCollection);
    setStatus
      .then(() => resolve())
      .catch((err) =>
        reject(`ERR: Failed registering ${movie.name} as a user`)
      );
  });
};

// Get movie data from the firestore db
export const getMovieInfo = (
  movieId: string
): Promise<[DocumentData, Unsubscribe]> => {
  return new Promise(async (resolve, reject) => {
    const getSnap = get(movieId, MovieCollection);
    getSnap
      .then((res) => {
        // Set the movie data to redux
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

// Update the movie data in the firestore db
// No need to send the whole User as a parameter, We just need to send the
// field which needs to be updated. 'newUserData' needs to be an object.
export const updateMovieInFirebase = (
  movieId: string,
  newMovieData: any
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    // tslint:disable-next-line:no-console

    const updateStatus = update(movieId, MovieCollection, newMovieData);
    updateStatus
      .then((res) => resolve(res))
      .catch((err) => reject(`ERR: Unable to update ${movieId}'s data`));
  });
};

// Deleting the movie from the firestore db
export const deleteMovie = (movieId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    deleteData(movieId, MovieCollection)
      .then(() => resolve())
      .catch((err) => reject(`ERR: Unable to delete ${movieId}'s data`));
  });
};
