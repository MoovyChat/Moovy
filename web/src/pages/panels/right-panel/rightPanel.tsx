import {
  BUY_ME_A_COFFEE,
  DISCORD_INVITE_LINK,
  INSTAGRAM_LINK,
  PATREON,
  TIKTOK_LINK,
  TWITTER_LINK,
} from '../../../constants';
import React, { MouseEventHandler, Suspense, useEffect, useState } from 'react';
import {
  TrendingObject,
  useCreateChargeMutation,
  useGetTrendingTitlesQuery,
} from '../../../generated/graphql';
import { lazyIconFa, lazyIconMd } from '../../../lazyLoad';

import BuyMeACoffee from '../../../static/images/bmc.webp';
import Loading from '../../loading/loading';
import PatreonWord from '../../../static/images/patreon-word.webp';
import { RightParent } from './rightPanel.styles';
import { getFormattedNumber } from '../../../utils/helpers';
import { useAppSelector } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const FaDiscord = lazyIconFa('FaDiscord');
const FaTwitter = lazyIconFa('FaTwitter');
const FaTiktok = lazyIconFa('FaTiktok');
const FaInstagram = lazyIconFa('FaInstagram');
const MdLocalFireDepartment = lazyIconMd('MdLocalFireDepartment');

type props = {
  className: string;
};

const RightPanel: React.FC<props> = ({ className }) => {
  const iconSize = 25;
  const [, createCharge] = useCreateChargeMutation();
  const [trendingMovies, setTrendingMovies] = useState<TrendingObject[] | null>(
    null
  );
  const [trendingShows, setTrendingShows] = useState<TrendingObject[] | null>(
    null
  );
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.user.id);

  const [trendingTitleQuery] = useGetTrendingTitlesQuery({
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
    const { data, error, fetching } = trendingTitleQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getTrendingTitles;
      setTrendingMovies(() => _data?.movies as TrendingObject[]);
      setTrendingShows(() => _data?.shows as TrendingObject[]);
    }
  }, [trendingTitleQuery]);
  return (
    <RightParent className={className}>
      <div className='trending titles'>
        <div className='heading'>
          <MdLocalFireDepartment color='#fc0404' size={20} />
          <div className='sub'>Trending Movies</div>
        </div>
        <div className='content'>
          {!trendingTitleQuery.fetching ? (
            trendingMovies &&
            trendingMovies.map((title) => (
              <div
                className='item'
                tabIndex={0}
                key={title.title}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/home/movie/${title.id}`);
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

      <div className='trending titles'>
        <div className='heading'>
          <MdLocalFireDepartment color='#fc0404' size={20} />
          <div className='sub'>Trending Shows</div>
        </div>
        <div className='content'>
          {!trendingTitleQuery.fetching ? (
            trendingShows &&
            trendingShows.map((title) => (
              <div
                className='item'
                key={title.title}
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/home/show/${title.id}`);
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

      <div className='socials'>
        <Suspense>
          <div className='socials-block'>
            <div className='item-heading'>Socials</div>
            <div className='item-options'>
              <div
                id='text-focus'
                className='discord social'
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(DISCORD_INVITE_LINK, '_blank');
                }}>
                <FaDiscord
                  color='cornflowerblue'
                  size={iconSize}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div
                className='twitter social'
                id='text-focus'
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(TWITTER_LINK, '_blank');
                }}>
                <FaTwitter
                  color='deepskyblue'
                  size={iconSize}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div
                className='tiktok social'
                id='text-focus'
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(TIKTOK_LINK, '_blank');
                }}>
                <FaTiktok
                  className='icon'
                  size={iconSize}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div
                className='instagram social'
                id='text-focus'
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(INSTAGRAM_LINK, '_blank');
                }}>
                <FaInstagram
                  color='hotpink'
                  size={iconSize}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
          </div>
          <div className='socials-block'>
            <div className='item-heading'>Donate & Support</div>
            <div className='item-options'>
              <div
                className='patreon'
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(PATREON, '_blank');
                }}>
                <div className='logo' id='text-focus'>
                  <img src={PatreonWord} alt='patreon' id='text-focus' />
                </div>
              </div>
              <div
                className='bmc'
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(BUY_ME_A_COFFEE, '_blank');
                }}>
                <div className='logo' id='text-focus'>
                  <img src={BuyMeACoffee} alt='bmc' id='text-focus' />
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </RightParent>
  );
};

export default RightPanel;
