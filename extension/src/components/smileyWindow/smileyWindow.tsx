import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RecentEmoji, db, freqEmoji } from '../../indexedDB/db';
import { SmileyWindowParent, Spoiler } from './smileyWindow.styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Emoji } from 'emojibase';
import EmojiButton from '../emojiPicker/emojiButton/emojiButton';
import _ from 'lodash';
import { colorLog } from '../../Utils/utilities';
import { sliceSetTextAreaMessage } from '../../redux/slices/textArea/textAreaSlice';
import { useLiveQuery } from 'dexie-react-hooks';

const SmileyWindow = () => {
  const [frequentEmojis, setFrequent] = useState<freqEmoji[]>([]);
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
      let allFreqEmojis =
        ems && ems[0] && ems[0].frequent ? ems[0].frequent : [];
      let recent = ers ? ers.slice(-10) : [];
      if (ems) setRecent(recent);
      let sorted = _.chain(allFreqEmojis)
        .sortBy((a) => -a.count)
        .take(10)
        .value();
      if (ems) setFrequent(sorted);
    }
  }, [ems, ers]);

  const setSpoiler = () => {
    let newText = textAreaMessage + ' <s></s>';
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
                      key={key}
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
                  {recentEmojis.map((emoji, key) => (
                    <EmojiButton key={key} emoji={emoji.emoji}></EmojiButton>
                  ))}
                </div>
              </div>
            )}
            {frequentEmojis.length > 0 && (
              <div className='section'>
                <div className='title'>Frequently used</div>
                <div className='emojis'>
                  {frequentEmojis.map((emoji, key) => (
                    <EmojiButton key={key} emoji={emoji.emoji}></EmojiButton>
                  ))}
                </div>
              </div>
            )}
            <div className='section'>
              <div className='title'>Comment options</div>
              <Spoiler>
                <div
                  className='spoiler-tag'
                  onClick={(e) => {
                    e.stopPropagation();
                    setSpoiler();
                  }}>
                  <span id='text-focus'>Spoiler</span>
                </div>
              </Spoiler>
            </div>
            <div className='promote'>
              <div className='logo'>Logo</div>
              <div className='socials'>
                <div className='discord'>D</div>
                <div className='twitter'>T</div>
                <div className='tik-tok'>TT</div>
                <div className='instagram'>I</div>
              </div>
              <div className='donate'>
                <div className='patreon'>P</div>
                <div className='stripe'>S</div>
              </div>
            </div>
          </div>
        </SmileyWindowParent>
      )}
    </React.Fragment>
  );
};

export default SmileyWindow;
