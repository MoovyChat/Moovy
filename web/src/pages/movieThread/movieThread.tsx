import { CURRENT_DOMAIN, isServer } from '../../constants';
import {
  Comment,
  Movie,
  useGetCommentsOfTheMovieQuery,
  useGetMovieQuery,
} from '../../generated/graphql';
import { MovieThreadParent, StyledHeader } from './movieThread.styled';
import { UIEventHandler, useEffect, useMemo, useRef, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import CommentButton from '../../components/comment-button/commentButton';
import CommentCard from '../../components/comment-card/commentCard';
import EmptyPage from '../../components/empty-page/emptyPage';
import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import NotFound from '../notFound/notFound';
import WatchVideo from '../../components/watch-video/watchVideo';
import { isNumber } from '../../utils/helpers';
import { urqlClient } from '../../utils/urlClient';
import usePageView from '../../hooks/usePageView';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const MovieThread = () => {
  const { id } = useParams();
  const ref = useRef<HTMLDivElement | null>(null);
  const [valid, setValid] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<Movie>();
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [{ data, error, fetching }] = useGetCommentsOfTheMovieQuery({
    variables: {
      mid: id!,
      page: page,
    },
    pause: isServer(),
  });

  usePageView();

  // Check if the movie Id is valid.
  useEffect(() => {
    if (!id) {
      setValid(false);
      return;
    }
    if (id !== '') setValid(() => true);
    else setValid(() => false);
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
    if (error) console.log(error);

    if (!fetching && data) {
      const _data = data.getCommentsOfTheMovie!;
      setHasMore(() => _data.hasMoreComments);
      setComments(() => _data.comments);
    }
  }, [data, error, fetching]);

  const scrollHandler: UIEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    const scrollValue = ref.current!.scrollTop;
    setScrollValue(scrollValue);
  };
  let headerTitle = scrollValue > 40 ? `${movieInfo?.name}` : 'Movie';
  if (fetching) return <Loading />;
  if (!movieInfo) return <NotFound />;

  return (
    <div>
      <Helmet>
        <title>{`${movieInfo.name}: Comments`}</title>
        <meta name="description" content={`${movieInfo.name}: Comments`} />
        <link
          rel="canonical"
          href={`${CURRENT_DOMAIN}/movie/${movieInfo.id}`}
        />
      </Helmet>
      {valid ? (
        <MovieThreadParent onScroll={scrollHandler} ref={ref}>
          <ChildHeader className="movie-header">
            <StyledHeader>
              <span>{headerTitle}</span>
              <WatchVideo
                id={id}
                platform="NETFLIX"
                type="movie"
                className="watch-video"
              />
            </StyledHeader>
          </ChildHeader>
          <div className="movie-container">
            <div className="thread-movie">
              <MovieCard movieId={movieInfo.id!} />
            </div>
            {comments && comments.length !== 0 ? (
              <div className="thread-comments">
                {comments?.map(cmt => (
                  <CommentCard comment={cmt} key={cmt.id} isMain={true} />
                ))}
                {hasMore && (
                  <div
                    className="show-more"
                    onClick={e => {
                      e.stopPropagation();
                      setPage(page + 1);
                    }}
                  >
                    Show more comments
                  </div>
                )}
              </div>
            ) : (
              <div className="no-data">
                <EmptyPage msg="No Comments yet. Make your first comment" />
              </div>
            )}
          </div>
          <CommentButton type="movie" data={movieInfo} />
        </MovieThreadParent>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default withUrqlClient(urqlClient)(MovieThread);
