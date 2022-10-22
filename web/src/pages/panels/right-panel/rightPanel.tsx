import { FaHashtag } from 'react-icons/fa';
import { MdLocalFireDepartment } from 'react-icons/md';
import React from 'react';
import { RightParent } from './rightPanel.styles';

type props = {
  className: string;
};
const fakeTitles = [
  {
    title: 'F.R.I.E.N.D.S',
    views: '1.2K',
  },
  {
    title: 'Breaking Bad',
    views: '1.15K',
  },
  {
    title: 'The Office',
    views: '1K',
  },
  {
    title: 'The Witcher',
    views: '900',
  },
  {
    title: 'House of cards',
    views: '800',
  },
];
const fakeHashTags = [
  {
    tag: '#MichaelJackson',
    mentions: '10.3K',
  },
  {
    tag: '#freecodefridaycontest',
    mentions: '10.3K',
  },
  {
    tag: '#OnePiece',
    mentions: '10.3K',
  },
  {
    tag: '#BreakingBad',
    mentions: '10.3K',
  },
  {
    tag: '#Imaginedragons',
    mentions: '10.3K',
  },
];
const RightPanel: React.FC<props> = ({ className }) => {
  return (
    <RightParent className={className}>
      <div className='adblock'>Advertisements goes here</div>
      <div className='trending titles'>
        <div className='heading'>
          <MdLocalFireDepartment color='#fc0404' size={20} />
          <div className='sub'>Trending titles</div>
        </div>
        <div className='content'>
          {fakeTitles.map((title) => (
            <div className='item'>
              <div className='title'>{title.title}</div>
              <div className='count'>{title.views} views</div>
            </div>
          ))}
        </div>
      </div>
      <div className='trending hashtags'>
        <div className='heading'>
          <FaHashtag color='#00b7ff' size={20} />
          <div className='sub'>Trending hashtags</div>
        </div>
        <div className='content'>
          {fakeHashTags.map((tag) => (
            <div className='item'>
              <div className='title'>{tag.tag}</div>
              <div className='count'>{tag.mentions} mentions</div>
            </div>
          ))}
        </div>
      </div>
    </RightParent>
  );
};

export default RightPanel;
