import React, { useEffect, useMemo, useState } from 'react';
import _, { values } from 'lodash';

import { Emoji } from 'emojibase';
import EmojiButton from '../emojiButton/emojiButton';
import { SubGroupParent } from './emojiSubGroup.styles';
import groupSet from 'emojibase-data/meta/groups.json';
import { useAppSelector } from '../../../redux/hooks';
import { useDebounce } from '../../../hooks/useDebounce';

type props = {
  emojiSet: Emoji[];
  setValues: any;
  index: number;
};
const EmojiSubGroup: React.FC<props> = ({ emojiSet, setValues, index }) => {
  const { subgroups } = groupSet;
  const searchValue = useAppSelector(state => state.misc.emojiSearchValue);
  const [emojis, setEmojis] = useState<Emoji[]>([...emojiSet]);
  const subGroupKey = emojiSet[0].subgroup;
  const groupName = subGroupKey ? subgroups[subGroupKey] : 'smiley';

  useEffect(() => {
    setValues((values: any) => {
      return { ...values, [index]: emojis.length };
    });
  }, [emojis, index]);

  useMemo(() => {
    let filtered = emojiSet.filter(em => {
      // Check if any tag partially matches the searchValue
      let tagMatch = em.tags?.some(tag =>
        tag.toLowerCase().includes(searchValue.toLowerCase()),
      );

      // Check if the label partially matches the searchValue
      let labelMatch = em.label
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      // Return the emoji if either tag or label partially matches the searchValue
      return tagMatch || labelMatch;
    });
    if (searchValue.length <= 0) setEmojis(() => emojiSet);
    else setEmojis(() => filtered);
  }, [searchValue]);
  return (
    <>
      {emojis.length > 0 && (
        <SubGroupParent className="emoji-sub-group">
          <div className="subgroup-name chip">
            {_.capitalize(groupName.split('-').join(' '))}
          </div>
          <div className="subgroup-emojis">
            {emojis.map((emoji, index) => (
              <EmojiButton key={`${emoji.label}${index}`} emoji={emoji} />
            ))}
          </div>
        </SubGroupParent>
      )}
    </>
  );
};

export default EmojiSubGroup;
