import { Emoji } from 'emojibase';
import EmojiButton from '../emojiButton/emojiButton';
import React from 'react';
import { SubGroupParent } from './emojiSubGroup.styles';
import _ from 'lodash';
import groupSet from 'emojibase-data/meta/groups.json';

type props = {
  emojiSet: Emoji[];
};
const EmojiSubGroup: React.FC<props> = ({ emojiSet }) => {
  const { subgroups } = groupSet;
  const subGroupKey = emojiSet[0].subgroup;
  const groupName = subGroupKey ? subgroups[subGroupKey] : 'smiley';
  return (
    <SubGroupParent className='emoji-sub-group'>
      <div className='subgroup-name chip'>
        {_.capitalize(groupName.split('-').join(' '))}
      </div>
      <div className='subgroup-emojis'>
        {emojiSet.map((emoji, index) => (
          <EmojiButton key={emoji.label} emoji={emoji} />
        ))}
      </div>
    </SubGroupParent>
  );
};

export default EmojiSubGroup;
