import { Emoji, fetchFromCDN } from 'emojibase';
import {
  EmojiPickerHeader,
  EmojiPickerParent,
  HeaderKey,
} from './emojiPicker.styles';
import { FrequentEmoji, RecentEmoji, db } from '../../indexedDB/db';
import { useCallback, useMemo, useState } from 'react';

import EmojiGroup from './emojiGroup/emojiGroup';
import groupSet from 'emojibase-data/meta/groups.json';
import useFetchEmojis from '../../contentScript/hooks/useFetchEmojis';

export interface subGroup {
  [subKey: number]: Emoji[];
}
export interface refinedG {
  [key: number]: subGroup;
}

let headerEmoji: any = {
  'smileys-emotion': '🤣',
  'people-body': '👨‍👩‍👧',
  'animals-nature': '🐵',
  'food-drink': '🍇',
  'travel-places': '🏖️',
  activities: '🎄',
  objects: '💎',
  symbols: '🛂',
  flags: '🏁',
};

const EmojiPicker = () => {
  const { groups } = groupSet;
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const refinedGroups = useFetchEmojis();

  const selectGroup = (groupNum: number) => {
    setGroupNumber(groupNum);
  };

  return (
    <EmojiPickerParent>
      <EmojiPickerHeader>
        {Object.values(groups).map(
          (value, index) =>
            index !== 2 && (
              <HeaderKey
                key={index}
                className='header-key'
                selectedGroup={index === groupNumber}
                onClick={(e) => {
                  e.stopPropagation();
                  selectGroup(index);
                }}>
                {headerEmoji[value]}
              </HeaderKey>
            )
        )}
      </EmojiPickerHeader>
      {refinedGroups && refinedGroups[groupNumber] && groupNumber !== 2 && (
        <EmojiGroup
          subGroup={refinedGroups[groupNumber]}
          groupNumber={groupNumber}
        />
      )}
    </EmojiPickerParent>
  );
};

export default EmojiPicker;
