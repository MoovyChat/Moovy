import React, { useEffect } from 'react';
import {
  sliceSetIsTextAreaFocused,
  sliceSetTextAreaMessage,
} from '../../../redux/slices/textArea/textAreaSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { Emoji } from 'emojibase';
import { EmojiButtonParent } from './emojiButton.styles';
import { colorLog } from '../../../Utils/utilities';
import { db } from '../../../indexedDB/db';

type props = {
  emoji: Emoji;
};
const EmojiButton: React.FC<props> = ({ emoji }) => {
  const text = useAppSelector((state) => state.textArea.text);
  const dispatch = useAppDispatch();

  const handleEmojiClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetTextAreaMessage(`${text}${emoji.emoji}`));
    dispatch(sliceSetIsTextAreaFocused(true));

    const addToRecentIndexedDB = async () => {
      try {
        const id = await db.recent.add({
          emoji,
        });
        const deleteEmoji = await db.recent
          .filter((r) => r.emoji.emoji === emoji.emoji)
          .keys();
        await db.recent.bulkDelete(deleteEmoji);
        const insertEmoji = await db.recent.add({
          emoji,
        });
        colorLog(`Successfully added to recent: ${insertEmoji}`);
      } catch (error) {
        colorLog('Error', error);
      }
    };

    // Once we have the data, inject the data into the indexedDB.
    const addToFrequentIndexedDB = async () => {
      try {
        const record = await db.frequent.get(1);
        if (!record) {
          const id = await db.frequent.add({
            frequent: [
              {
                count: 0,
                emoji,
              },
            ],
          });
          colorLog(`Successfully added: ${id}`);
        } else {
          const freq = record.frequent;
          const found = freq.find((f) => f.emoji.emoji === emoji.emoji);
          // Find if emoji is already exists in the array
          if (found) {
            const { count } = found;
            const newFreq = freq.map((f) =>
              f.emoji.emoji === emoji.emoji
                ? {
                    count: count + 1,
                    emoji,
                  }
                : f
            );
            const id = await db.frequent
              .update(1, {
                frequent: newFreq,
              })
              .then((res) => colorLog('Updated', res));
          } else {
            const id = await db.frequent
              .update(1, {
                frequent: [
                  ...freq,
                  {
                    count: 1,
                    emoji,
                  },
                ],
              })
              .then((res) => colorLog('Updated', res));
          }
        }
      } catch (error) {
        colorLog(`Failed to add} ${error}`);
      }
    };

    addToFrequentIndexedDB();
    addToRecentIndexedDB();
  };

  return (
    <EmojiButtonParent className='emoji-button' onClick={handleEmojiClick}>
      <button id='text-focus'>{emoji.emoji}</button>
    </EmojiButtonParent>
  );
};

export default EmojiButton;
