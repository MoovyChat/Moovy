import Dexie, { Table } from "dexie";

import { Emoji } from "emojibase";
import { refinedG } from "../../../components/emoji-picker/emojiPicker";

interface Emojis {
  id?: number;
  emojis: refinedG;
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
    super("emojiDB");
    try {
      this.version(1).stores({
        emojis: "++id, emojis",
        frequent: "++id, count, emoji",
        recent: "++id, recent",
      });
    } catch (e) {
      console.error("Error creating or upgrading database:", e);
    }
  }
}

export const db = new EmojiDB();
