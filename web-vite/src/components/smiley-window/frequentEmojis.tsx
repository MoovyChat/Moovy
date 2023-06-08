import React, { useEffect, useState } from "react";
import {
  FrequentEmoji,
  RecentEmoji,
  db,
} from "../../pages/content/indexedDB/db";
import { useLiveQuery } from "dexie-react-hooks";
import EmojiButton from "../emoji-picker/emojiButton/emojiButton";
import _ from "lodash";
import { StyledFreqEmoji } from "./smileyWindow.styles";

const FrequentEmojis = () => {
  const [frequentEmojis, setFrequent] = useState<FrequentEmoji[]>([]);
  const [recentEmojis, setRecent] = useState<RecentEmoji[]>([]);

  const ems = useLiveQuery(() => {
    if (db.frequent) return db.frequent.toArray();
    return [];
  });
  const ers = useLiveQuery(() => {
    if (db.recent) return db.recent.toArray();
    return [];
  });

  useEffect(() => {
    if (ems) {
      const recent = ers ? ers.slice(-10).reverse() : [];
      if (ers) setRecent(recent);
      const sorted = _.chain(ems)
        .sortBy((a) => -a.count)
        .take(10)
        .value();
      if (ems) setFrequent(sorted);
    }
  }, [ems, ers]);
  return (
    <StyledFreqEmoji>
      {recentEmojis && recentEmojis.length > 0 && (
        <div className="section">
          <div className="title">Recently used</div>
          <div className="emojis">
            {recentEmojis.map((emoji, key) => (
              <div className="emoji-child recent" key={`${emoji.id}-${key}`}>
                <EmojiButton key={emoji.id} emoji={emoji.emoji}></EmojiButton>
              </div>
            ))}
          </div>
        </div>
      )}
      {frequentEmojis && frequentEmojis.length > 0 && (
        <div className="section">
          <div className="title">Frequently used</div>
          <div className="emojis">
            {frequentEmojis.map((emoji, key) => (
              <div className="emoji-child frequent" key={`${key}-${emoji.id}`}>
                <EmojiButton key={emoji.id} emoji={emoji.emoji}></EmojiButton>
              </div>
            ))}
          </div>
        </div>
      )}
    </StyledFreqEmoji>
  );
};

export default FrequentEmojis;
