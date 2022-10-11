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
        if ((await db.recent.count()) > 12) db.recent.delete(2);
        colorLog(`Successfully added to recent: ${insertEmoji}`);
      } catch (error) {
        colorLog('Error', error);
      }
    };

    // Once we have the data, inject the data into the indexedDB.
    const addToFrequentIndexedDB = async () => {
      try {
        const record = await db.frequent.filter(
          (f) => f.emoji.emoji === emoji.emoji
        );
        let foundEmoji = await record.first();
        if (!foundEmoji) {
          const id = await db.frequent.add({
            count: 1,
            emoji,
          });
          colorLog(`Successfully added: ${id}`);
        } else {
          await db.frequent.update(foundEmoji.id!, {
            count: foundEmoji.count! + 1,
            emoji,
          });
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
