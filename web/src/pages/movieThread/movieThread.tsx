import {
  Movie,
  useGetCommentsOfTheMovieMutation,
  useGetCommentsOfTheMovieQQuery,
  useGetMovieQuery,
} from '../../generated/graphql';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { Comment } from '../../utils/interfaces';
import CommentCard from '../../components/comment-card/commentCard';
import MovieCard from '../../components/movie-card/movieCard';
import { MovieThreadParent } from './movieThread.styled';
import NotFound from '../notFound/notFound';
import _ from 'lodash';
import { isNumber } from '../../utils/helpers';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import useIsAuth from '../../utils/isAuthUser';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const MovieThread = () => {
  useIsAuth();
  const { id } = useParams();
  const limit = 10;
  const [valid, setValid] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<Movie>();

  const [comments, setComments] = useState<Comment[]>();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [getCommentsOfTheMovie] = useGetCommentsOfTheMovieQQuery({
    variables: {
      limit: limit,
      mid: id!,
      page: page,
    },
    pause: isServer(),
  });
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
  useMemo(() => {
    const { data, error, fetching } = movieData;
    if (error) console.log(error);
    if (!fetching && data) {
      const a = data.getMovie as Movie;
      setMovieInfo(a);
    }
  }, [movieData]);

  // Set Movie Comments
  useMemo(() => {
    const { data, fetching, error } = getCommentsOfTheMovie;
    console.log(getCommentsOfTheMovie);
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentsOfTheMovie;
      const _lastPage = data.getCommentsOfTheMovie?.lastPage;
      setLastPage(_lastPage!);
      const _comments = _data?.comments! as Comment[];
      if (comments) {
        let newComments = _.concat(comments, _comments);
        let filtered = _.uniqBy(newComments, 'id');
        setComments(filtered);
      } else setComments(_comments);
    }
  }, [getCommentsOfTheMovie]);

  return (
    <div>
      {valid ? (
        <MovieThreadParent>
          <ChildHeader text='Movie' className='movie-header' />
          <div className='movie-container'>
            <div className='thread-movie'>
              <MovieCard movie={movieInfo!} />
            </div>
            <div className='thread-comments'>
              {comments?.map((cmt) => (
                <CommentCard comment={cmt} key={cmt.id} isMain={true} />
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
          </div>
        </MovieThreadParent>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default withUrqlClient(urqlClient)(MovieThread);
