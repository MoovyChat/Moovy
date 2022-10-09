import { Emoji, fetchFromCDN } from 'emojibase';
import { EmojiPickerHeader, EmojiPickerParent } from './emojiPicker.styles';
import { useMemo, useState } from 'react';

import EmojiGroup from './emojiGroup/emojiGroup';
import { colorLog } from '../../Utils/utilities';
import { db } from '../../indexedDB/db';
import groupSet from 'emojibase-data/meta/groups.json';

export interface subGroup {
  [subKey: number]: Emoji[];
}
export interface refinedG {
  [key: number]: subGroup;
}

let headerEmoji: any = {
  'smileys-emotion': '🤣',
  'people-body': '👨‍👩‍👧',
  component: '🎨',
  'animals-nature': '🐵',
  'food-drink': '🍇',
  'travel-places': '🏖️',
  activities: '🎄',
  objects: '💎',
  symbols: '🛂',
  flags: '🏁',
};

const EmojiPicker = () => {
  const { groups, subgroups } = groupSet;
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const [refinedGroups, setRefinedGroups] = useState<refinedG>({});
  let rg: refinedG = {};
  useMemo(async () => {
    const data: Emoji[] = await fetchFromCDN('en/data.json');
    // Refining data to the object with keys and subKeys.
    await data.map((em) => {
      let key = em.group!;
      let subKey = em.subgroup!;
      if (rg[key] === undefined) {
        rg = {
          ...rg,
          [key]: {
            [subKey]: [em],
          },
        };
      } else {
        if (rg[key][subKey] === undefined) {
          rg = {
            ...rg,
            [key]: {
              ...rg[key],
              [subKey]: [em],
            },
          };
        } else
          rg = {
            ...rg,
            [key]: {
              ...rg[key],
              [subKey]: [...rg[key][subKey], em],
            },
          };
      }
    });
    setRefinedGroups(rg);
    // Once we have the data, inject the data into the indexedDB.
    const runIndexDb = async () => {
      try {
        const id = await db.emojis.add({
          emojis: rg,
        });
        colorLog(`Successfully added: ${id}`);
      } catch (error) {
        colorLog(`Failed to add} ${error}`);
      }
    };

    runIndexDb();
  }, []);

  const selectGroup = (groupNum: number) => {
    setGroupNumber(groupNum);
  };

  return (
    <EmojiPickerParent>
      <EmojiPickerHeader>
        {Object.values(groups).map((value, index) => (
          <div
            key={index}
            className='header-key'
            onClick={(e) => {
              e.stopPropagation();
              selectGroup(index);
            }}>
            {headerEmoji[value]}
          </div>
        ))}
      </EmojiPickerHeader>
      {refinedGroups && refinedGroups[groupNumber] && (
        <EmojiGroup subGroup={refinedGroups[groupNumber]} />
      )}
    </EmojiPickerParent>
  );
};

export default EmojiPicker;
