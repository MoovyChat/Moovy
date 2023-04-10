import React from 'react';
import { StyledEmbedContent } from './embedContent.styles';
import usePageView from '../../hooks/usePageView';

const EmbedContent = () => {
  usePageView();
  return (
    <StyledEmbedContent>
      <div>
        Welcome to MoovyChat! You're all set to enjoy a new level of interactive
        streaming. Add your favorite movies and TV shows to your watchlist, join
        the conversation in the comment section, and customize your viewing
        experience with video filters. Happy streaming!
      </div>
      {/* <div
        className='arc-btn'
        onClick={(e) => {
          e.stopPropagation();
          window.open(
            'https://www.netflix.com/watch/81513788?trackId=14170287&tctx=2%2C1%2C425f6d7d-f1b3-4d5c-b76c-bdc44b9b384d-32516550%2CNES_21968F364C22BEA080F24A6E382619-B9F225DDE3A711-640966F254_p_1676936973581%2C%2C%2C%2C%2C%2CVideo%3A81091393',
            '_blank'
          );
        }}>
        Update
      </div> */}
    </StyledEmbedContent>
  );
};

export default EmbedContent;
