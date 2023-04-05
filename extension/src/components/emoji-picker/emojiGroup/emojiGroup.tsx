import React, { FC } from 'react';

import EmojiSubGroup from '../emojiSubGroup/emojiSubGroup';
import { GroupParent } from './emojiGroup.styles';
import { subGroup } from '../emojiPicker';

type props = {
  subGroup: subGroup;
};
const EmojiGroup: FC<props> = ({ subGroup }) => {
  return (
    <GroupParent>
      {subGroup &&
        Object.values(subGroup).map((value, index) => (
          <EmojiSubGroup key={index} emojiSet={value} />
        ))}
    </GroupParent>
  );
};

export default EmojiGroup;
