import React, { useEffect, useMemo, useRef, useState } from 'react';

import EmojiSubGroup from '../emojiSubGroup/emojiSubGroup';
import { GroupParent } from './emojiGroup.styles';
import { ViewportList } from 'react-viewport-list';
import { sliceSetEmojiGroupActive } from '../../../redux/slices/miscSlice';
import { subGroup } from '../emojiPicker';
import { useAppDispatch } from '../../../redux/hooks';

type props = {
  subGroup: subGroup;
  groupNumber: number;
  index: number;
};
const EmojiGroup: React.FC<props> = ({ subGroup, groupNumber, index }) => {
  const dispatch = useAppDispatch();
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const itemsLength = Object.values(subGroup).length;
  let initialObject = {};
  for (let i = 0; i < itemsLength; i++) {
    initialObject = { ...initialObject, [i]: 0 };
  }
  const [values, setValues] = useState<any>({ ...initialObject });
  useEffect(() => {
    if (groupNumber === index) {
      parentRef.current?.scrollIntoView();
    }
  }, [groupNumber, index, parentRef?.current]);
  useEffect(() => {
    let res = Object.values(values).filter(v => v !== 0);
    if (res.length === 0) {
      dispatch(sliceSetEmojiGroupActive({ key: index, value: false }));
    } else {
      dispatch(sliceSetEmojiGroupActive({ key: index, value: true }));
    }
  }, [values, index]);
  return (
    <GroupParent ref={parentRef}>
      {subGroup && (
        <ViewportList
          ref={listRef}
          viewportRef={parentRef}
          items={Object.values(subGroup)}
        >
          {(value, index) => (
            <EmojiSubGroup
              key={index}
              emojiSet={value}
              setValues={setValues}
              index={index}
            />
          )}
        </ViewportList>
      )}
    </GroupParent>
  );
};

export default EmojiGroup;
