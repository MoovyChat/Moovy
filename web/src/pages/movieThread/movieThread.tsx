import {
  Movie,
  useGetCommentsOfTheMovieQQuery,
  useGetMovieQuery,
} from '../../generated/graphql';
import { MovieThreadParent, StyledHeader } from './movieThread.styled';
import { UIEventHandler, useEffect, useMemo, useRef, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { Comment } from '../../utils/interfaces';
import CommentButton from '../../components/comment-button/commentButton';
import CommentCard from '../../components/comment-card/commentCard';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import NotFound from '../notFound/notFound';
import WatchVideo from '../../components/watch-video/watchVideo';
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
  const ref = useRef<HTMLDivElement | null>(null);
  const [valid, setValid] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<Movie>();
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState<number>(1);
  const [scrollValue, setScrollValue] = useState<number>(0);
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
      setMovieInfo(() => a);
    }
  }, [movieData]);

  // Set Movie Comments
  useMemo(() => {
    const { data, fetching, error } = getCommentsOfTheMovie;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentsOfTheMovie!;
      const _lastPage = _data.lastPage;
      setLastPage(() => _lastPage!);
      setHasMore(() => _data.hasMoreComments);
    }
  }, [getCommentsOfTheMovie, page]);

  const scrollHandler: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const scrollValue = ref.current!.scrollTop;
    setScrollValue(scrollValue);
  };
  let headerTitle = scrollValue > 40 ? `${movieInfo?.name}` : 'Movie';
  if (getCommentsOfTheMovie.fetching) return <Loading />;
  if (!movieInfo) return <NotFound />;
  const { comments } = getCommentsOfTheMovie.data?.getCommentsOfTheMovie!;
  return (
    <div>
      {valid ? (
        <MovieThreadParent onScroll={scrollHandler} ref={ref}>
          <ChildHeader className='movie-header'>
            <StyledHeader>
              <span>{headerTitle}</span>
              <WatchVideo
                id={id}
                platform='NETFLIX'
                type='movie'
                className='watch-video'
              />
            </StyledHeader>
          </ChildHeader>
          <div className='movie-container'>
            <div className='thread-movie'>
              <MovieCard movie={movieInfo!} />
            </div>
            {comments && comments.length !== 0 ? (
              <div className='thread-comments'>
                {getCommentsOfTheMovie?.data?.getCommentsOfTheMovie!.comments?.map(
                  (cmt) => (
                    <CommentCard comment={cmt} key={cmt.id} isMain={true} />
                  )
                )}
                {hasMore && (
                  <div
                    className='show-more'
                    onClick={(e) => {
                      e.stopPropagation();
                      setPage(page + 1);
                      setPageCount(() => page + 1);
                    }}>
                    Show more comments
                  </div>
                )}
              </div>
            ) : (
              <div className='no-data'>
                No Comments yet. Make your first comment
              </div>
            )}
          </div>
          <CommentButton type='movie' data={movieInfo} />
        </MovieThreadParent>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default withUrqlClient(urqlClient)(MovieThread);
