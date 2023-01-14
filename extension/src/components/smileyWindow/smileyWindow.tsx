import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { FrequentEmoji, RecentEmoji, db } from '../../indexedDB/db';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import EmojiButton from '../emojiPicker/emojiButton/emojiButton';
import { SmileyWindowParent } from './smileyWindow.styles';
import _ from 'lodash';
import { sliceSetTextAreaMessage } from '../../redux/slices/textArea/textAreaSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { useLiveQuery } from 'dexie-react-hooks';
import { withUrqlClient } from 'next-urql';

const SmileyWindow = () => {
  const iconSize = 30;
  const [frequentEmojis, setFrequent] = useState<FrequentEmoji[]>([]);
  const [recentEmojis, setRecent] = useState<RecentEmoji[]>([]);
  const wordSuggestions: string[] = useAppSelector(
    (state) => state.textArea.wordSuggestions
  );
  const ems = useLiveQuery(() => {
    if (db.frequent) return db.frequent.toArray();
    return [];
  });
  const ers = useLiveQuery(() => {
    if (db.recent) return db.recent.toArray();
    return [];
  });
  const textAreaMessage = useAppSelector((state) => state.textArea.text);
  const textAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (ems) {
      let recent = ers ? ers.slice(-10).reverse() : [];
      if (ers) setRecent(recent);
      let sorted = _.chain(ems)
        .sortBy((a) => -a.count)
        .take(10)
        .value();
      if (ems) setFrequent(sorted);
    }
  }, [ems, ers]);

  const setSpoiler = () => {
    let newText = textAreaMessage + '<s></s>';
    dispatch(sliceSetTextAreaMessage(newText));
  };
  const handleWord: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    let el = e.target as HTMLDivElement;
    let msgArr = textAreaMessage.split(' ');
    msgArr.pop();
    msgArr.push(el.textContent!);
    dispatch(sliceSetTextAreaMessage(msgArr.join(' ')));
  };

  return (
    <React.Fragment>
      {textAreaFocussed && (
        <SmileyWindowParent>
          <div className='child'>
            {wordSuggestions.length > 0 && (
              <div className='section'>
                <div className='title'>Suggestions</div>
                <div className='suggestions'>
                  {wordSuggestions.slice(0, 3).map((word, key) => (
                    <div
                      id='text-focus'
                      className='word'
                      key={word}
                      onClick={handleWord}>
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {recentEmojis.length > 0 && (
              <div className='section'>
                <div className='title'>Recently used</div>
                <div className='emojis'>
                  {recentEmojis.map((emoji) => (
                    <div className='emoji-child recent' key={emoji.id}>
                      <EmojiButton
                        key={emoji.id}
                        emoji={emoji.emoji}></EmojiButton>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {frequentEmojis.length > 0 && (
              <div className='section'>
                <div className='title'>Frequently used</div>
                <div className='emojis'>
                  {frequentEmojis.map((emoji) => (
                    <div className='emoji-child frequent' key={emoji.id}>
                      <EmojiButton
                        key={emoji.id}
                        emoji={emoji.emoji}></EmojiButton>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className='section'>
              <div className='title'>Comment options</div>
              <div
                className='spoiler'
                onClick={(e) => {
                  e.stopPropagation();
                  setSpoiler();
                }}>
                <div className='tag' id='text-focus'>
                  Spoiler
                </div>
              </div>
            </div>
            <div className='section'>
              <div className='title'>Socials</div>
              <div className='socials'>
                <div className='discord'>
                  <FaDiscord color='cornflowerblue' size={iconSize} />
                </div>
                <div className='twitter'>
                  <FaTwitter color='deepskyblue' size={iconSize} />
                </div>
                <div className='tiktok'>
                  <FaTiktok className='icon' size={iconSize} />
                </div>
                <div className='instagram'>
                  <FaInstagram color='hotpink' size={iconSize} />
                </div>
              </div>
              {/* <div className='section'>
                <div className='title'>Donate & Support</div>
                <div className='donate'>
                  <div className='patreon'>Patreon</div>
                  <div className='stripe'>Stripe</div>
                </div>
              </div> */}
            </div>
          </div>
        </SmileyWindowParent>
      )}
    </React.Fragment>
  );
};

export default withUrqlClient(urqlClient)(SmileyWindow);
