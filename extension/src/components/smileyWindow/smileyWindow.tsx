import { db, freqEmoji } from '../../indexedDB/db';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Emoji } from 'emojibase';
import EmojiButton from '../emojiPicker/emojiButton/emojiButton';
import { SmileyWindowParent } from './smileyWindow.styles';
import _ from 'lodash';
import { colorLog } from '../../Utils/utilities';
import { useAppSelector } from '../../redux/hooks';
import { useLiveQuery } from 'dexie-react-hooks';

const SmileyWindow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [emojis, setEmojis] = useState<freqEmoji[]>([]);
  const ems = useLiveQuery(() => db.frequent.toArray());
  const textAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  useEffect(() => {
    colorLog('From Dexie', ems);
    if (ems) {
      let allFreqEmojis = ems[0].frequent!;
      let sorted = _.chain(allFreqEmojis)
        .sortBy((a) => -a.count)
        .take(5)
        .value();
      colorLog(sorted);
      if (ems) setEmojis(sorted);
    }
  }, [ems]);

  const handleOnSelect = () => {};

  return (
    <div>
      {textAreaFocussed && (
        <SmileyWindowParent ref={ref}>
          <div className='frequent-emojis'>
            {emojis.map((emoji, key) => (
              <EmojiButton key={key} emoji={emoji.emoji}></EmojiButton>
            ))}
          </div>
        </SmileyWindowParent>
      )}
    </div>
  );
};

export default SmileyWindow;
