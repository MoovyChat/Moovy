import { Emoji } from 'emojibase';
import EmojiButton from '../emojiButton/emojiButton';
import React from 'react';
import { SubGroupParent } from './emojiSubGroup.styles';
import groupSet from 'emojibase-data/meta/groups.json';

type props = {
  emojiSet: Emoji[];
};
const EmojiSubGroup: React.FC<props> = ({ emojiSet }) => {
  const { subgroups } = groupSet;
  const subGroupKey = emojiSet[0].subgroup;
  const groupName = subGroupKey ? subgroups[subGroupKey] : 'smiley';
  return (
    <SubGroupParent className="emoji-sub-group">
      <div className="subgroup-name">{groupName}</div>
      <div className="subgroup-emojis">
        {emojiSet.map((emoji, index) => (
          <EmojiButton key={`${emoji.label}:${index}`} emoji={emoji} />
        ))}
      </div>
    </SubGroupParent>
  );
};

export default EmojiSubGroup;
