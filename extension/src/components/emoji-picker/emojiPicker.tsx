import {
  EmojiPickerHeader,
  EmojiPickerParent,
  HeaderKey,
} from './emojiPicker.styles';
import { TouchEventHandler, WheelEventHandler, useRef, useState } from 'react';

/* eslint-disable react/react-in-jsx-scope */
import { Emoji } from 'emojibase';
import EmojiGroup from './emojiGroup/emojiGroup';
import groupSet from 'emojibase-data/meta/groups.json';
import useFetchEmojis from '../../contentScript/hooks/useFetchEmojis';

export interface subGroup {
  [subKey: number]: Emoji[];
}
export interface refinedG {
  [key: number]: subGroup;
}

const headerEmoji: any = {
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
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const refinedGroups = useFetchEmojis();

  const swipeThreshold = 30;
  const selectGroup = (groupNum: number) => {
    setGroupNumber(groupNum);
  };

  const handleWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (Math.abs(e.deltaX) >= swipeThreshold) {
      if (e.deltaX > 0) {
        // Swipe right
        setGroupNumber((num) => (num + 1 >= 9 ? 9 : num + 1));
      } else {
        // Swipe left
        setGroupNumber((num) => (num - 1 < 0 ? 0 : num - 1));
      }
    }
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 0) {
      // Swipe right
      setGroupNumber((num) => (num + 1 >= 10 ? 10 : num + 1));
    } else {
      // Swipe left
      setGroupNumber((num) => (num - 1 < 0 ? 0 : num - 1));
    }
  };

  return (
    <EmojiPickerParent
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <EmojiPickerHeader>
        {Object.values(groups).map(
          (value, index) =>
            index !== 2 && (
              <HeaderKey
                key={index}
                className="header-key"
                selectedGroup={index === groupNumber}
                onClick={(e) => {
                  e.stopPropagation();
                  selectGroup(index);
                }}
              >
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
