import Dexie, { Table } from 'dexie';

import { Emoji } from 'emojibase';
import { RefinedG } from '../components/emojiPicker/emojiPicker';

export interface Emojis {
  id?: number;
  emojis: RefinedG;
}

export interface FrequentEmoji {
  id?: number;
  count: number;
  emoji: Emoji;
}

export interface RecentEmoji {
  id?: number;
  emoji: Emoji;
}

export class EmojiDB extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  emojis!: Table<Emojis>;
  frequent!: Table<FrequentEmoji>;
  recent!: Table<RecentEmoji>;

  constructor() {
    super('emojiDB');
    this.version(1).stores({
      emojis: '++id, emojis',
      frequent: '++id, count, emoji',
      recent: '++id, recent',
    });
  }
}

export const db = new EmojiDB();
