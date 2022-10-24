import { Comment, Movie } from '../../utils/interfaces';
import React, { useEffect, useState } from 'react';
import {
  useGetCommentsOfTheMovieMutation,
  useGetMovieQuery,
} from '../../generated/graphql';

import CommentCard from '../../components/comment-card/commentCard';
import MovieCard from '../../components/movieCard/movieCard';
import { MovieThreadParent } from './movieThread.styled';
import NotFound from '../notFound/notFound';
import _ from 'lodash';
import { isNumber } from '../../utils/helpers';
import { isServer } from '../../constants';
import { useParams } from 'react-router-dom';

const MovieThread = () => {
  const { id } = useParams();
  const limit = 10;
  const [valid, setValid] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<Movie>();
  const [, getMovieComments] = useGetCommentsOfTheMovieMutation();
  const [comments, setComments] = useState<Comment[]>();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  // Check if the movie Id is valid.
  useEffect(() => {
    if (!id) {
      setValid(false);
      return;
    }
    const res = isNumber(id);
    setValid(res);
  }, [id]);

  // GraphQL: Get movie info
  const [movieData, _executeQuery] = useGetMovieQuery({
    variables: { mid: id! },
    pause: isServer(),
  });

  // Set Movie Data.
  useEffect(() => {
    const { data, error, fetching } = movieData;
    if (error) console.log(error);
    if (!fetching && data) {
      const a = data.getMovie as Movie;
      setMovieInfo(a);
    }
  }, [movieData]);

  // Set Movie Comments
  useEffect(() => {
    getMovieComments({
      limit: limit,
      mid: id!,
      page: page,
      time: new Date().getTime().toString(),
    }).then((res) => {
      const b = res.data?.getCommentsOfTheMovie;
      const _lastPage = b?.lastPage;
      setLastPage(_lastPage!);
      const _cmt = b?.comments as Comment[];
      if (comments) setComments(_.concat(comments, _cmt));
      else setComments(_cmt);
    });
  }, [id, page]);

  return (
    <div>
      {valid ? (
        <MovieThreadParent>
          <div className='thread-movie'>
            <MovieCard movie={movieInfo} />
          </div>
          <div className='thread-comments'>
            {comments?.map((cmt) => (
              <CommentCard comment={cmt} key={cmt.id} />
            ))}
            {page !== lastPage && (
              <div
                className='show-more'
                onClick={(e) => {
                  e.stopPropagation();
                  setPage(page + 1);
                }}>
                Show more comments
              </div>
            )}
          </div>
        </MovieThreadParent>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default MovieThread;
