import { Emoji } from 'emojibase';
import EmojiButton from '../emojiButton/emojiButton';
import React from 'react';
import { SubGroupParent } from './emojiSubGroup.styles';

type props = {
  emojiSet: Emoji[];
};
const EmojiSubGroup: React.FC<props> = ({ emojiSet }) => {
  return (
    <SubGroupParent className='emoji-sub-group'>
      {emojiSet.map((emoji, index) => (
        <EmojiButton key={index} emoji={emoji} />
      ))}
    </SubGroupParent>
  );
};

export default EmojiSubGroup;
