import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  TrendingObject,
  useCreateChargeMutation,
  useGetTrendingMoviesQuery,
} from '../../../generated/graphql';

import Ads from '../../../components/ads/ads';
import Loading from '../../loading/loading';
import { MdLocalFireDepartment } from 'react-icons/md';
import { RightParent } from './rightPanel.styles';
import { getFormattedNumber } from '../../../utils/helpers';
import { useAppSelector } from '../../../redux/hooks';
import useIsAuth from '../../../utils/isAuthUser';
import { useNavigate } from 'react-router-dom';

type props = {
  className: string;
};

const RightPanel: React.FC<props> = ({ className }) => {
  const [, createCharge] = useCreateChargeMutation();
  const [trendingMovies, setTrendingMovies] = useState<TrendingObject[] | null>(
    null
  );
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.user.id);
  useIsAuth();

  const [trendingMoviesQuery] = useGetTrendingMoviesQuery({
    variables: {
      limit: 5,
    },
  });

  const purchasePremium: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    const res = await createCharge({ userId: userId });
    const { data, error } = res;
    if (error) console.log(error);
    if (data) {
      const url = data.createCharge as string;
      window.open(url, '_open');
    }
  };

  useEffect(() => {
    const { data, error, fetching } = trendingMoviesQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getTrendingMovies;
      setTrendingMovies(() => _data as TrendingObject[]);
    }
  }, [trendingMoviesQuery]);
  return (
    <RightParent className={className}>
      {/* <div className='adblock'>
        <Ads />
      </div> */}
      <div className='trending titles'>
        <div className='heading'>
          <MdLocalFireDepartment color='#fc0404' size={20} />
          <div className='sub'>Trending Movies</div>
        </div>
        <div className='content'>
          {!trendingMoviesQuery.fetching ? (
            trendingMovies &&
            trendingMovies.map((title) => (
              <div
                className='item'
                key={title.title}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/movie/${title.id}`);
                }}>
                <div className='title'>{title.title}</div>
                <div className='count'>
                  {getFormattedNumber(title.viewsCount)} views
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      {/* <div className='trending premium'>
        <div className='heading'>
          <MdOutlineStar size={20} />
          <div className='sub'>Premium features</div>
        </div>
        <div className='content'>
          {fakeHashTags.map((tag) => (
            <div className='item' key={tag.tag}>
              <div className='title'>{tag.tag}</div>
              <div className='count'>{tag.mentions}</div>
            </div>
          ))}
          <div className='item purchase' onClick={purchasePremium}>
            <div className='title'>Purchase</div>
            <div className='price'>
              <span>$1.50</span>
              <del className='limited'>($2.00)</del>
            </div>
            <div className='warning'>
              <span>*Valid only for a limited time.</span>
            </div>
          </div>
        </div>
      </div> */}
    </RightParent>
  );
};

export default RightPanel;
