import { ChangeEventHandler, UIEventHandler, useRef, useState } from 'react';
import {
  EmojiPickerHeader,
  EmojiPickerParent,
  EmojiSearch,
  HeaderKey,
} from './emojiPicker.styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Emoji } from 'emojibase';
import EmojiGroup from './emojiGroup/emojiGroup';
import groupSet from 'emojibase-data/meta/groups.json';
import { sliceSetEmojiSearchValue } from '../../redux/slices/miscSlice';
import useFetchEmojis from '../../hooks/useFetchEmojis';

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
  const value = useAppSelector(state => state.misc.emojiSearchValue);
  const dispatch = useAppDispatch();
  let groupActive: any = useAppSelector(state => state.misc.emojiGroupActive);
  const groupRef = useRef<HTMLDivElement | null>(null);
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const refinedGroups = useFetchEmojis();
  const selectGroup = (groupNum: number) => {
    setGroupNumber(groupNum);
  };

  const changeValueHandler: ChangeEventHandler<HTMLInputElement> = e => {
    e.stopPropagation();
    dispatch(sliceSetEmojiSearchValue(e.target.value));
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    if (!groupRef || !groupRef.current) return;

    const elementWidth = groupRef?.current.clientWidth - 10; // width of each element
    const scrollPos = groupRef?.current.scrollLeft; // current scroll position

    let currentIndex = Math.floor(scrollPos / elementWidth);
    if (currentIndex >= 2) currentIndex = currentIndex + 1;
    setGroupNumber(currentIndex);
  };

  return (
    <EmojiPickerParent>
      <EmojiSearch>
        <input
          type="text"
          id="search"
          name="search"
          value={value}
          onChange={changeValueHandler}
          placeholder="Search Emoji"
        />
      </EmojiSearch>
      <EmojiPickerHeader>
        {Object.values(groups).map(
          (value, index) =>
            index !== 2 && (
              <HeaderKey
                active={groupActive[index]}
                key={index}
                className="header-key"
                selectedGroup={index === groupNumber}
                onClick={e => {
                  e.stopPropagation();
                  selectGroup(index);
                }}
              >
                {headerEmoji[value]}
              </HeaderKey>
            ),
        )}
      </EmojiPickerHeader>
      <div className="container" ref={groupRef} onScroll={handleScroll}>
        {refinedGroups && (
          <div className="group-container">
            {Object.values(refinedGroups).map(
              (group, index) =>
                index !== 2 && (
                  <EmojiGroup
                    key={index}
                    subGroup={group}
                    groupNumber={groupNumber}
                    index={index}
                  />
                ),
            )}
          </div>
        )}
      </div>
    </EmojiPickerParent>
  );
};

export default EmojiPicker;
