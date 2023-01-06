import React, { useRef } from 'react';

import EmojiSubGroup from '../emojiSubGroup/emojiSubGroup';
import { GroupParent } from './emojiGroup.styles';
import ViewportList from 'react-viewport-list';
import { subGroup } from '../emojiPicker';

type props = {
  subGroup: subGroup;
  groupNumber: number;
};
const EmojiGroup: React.FC<props> = ({ subGroup, groupNumber }) => {
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  return (
    <GroupParent ref={parentRef}>
      {subGroup && (
        <ViewportList
          ref={listRef}
          viewportRef={parentRef}
          items={Object.values(subGroup)}>
          {(value, index) => <EmojiSubGroup key={index} emojiSet={value} />}
        </ViewportList>
      )}
    </GroupParent>
  );
};

export default EmojiGroup;
