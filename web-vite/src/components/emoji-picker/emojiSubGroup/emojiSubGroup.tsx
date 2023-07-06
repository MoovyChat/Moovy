import { Emoji } from "emojibase";
import EmojiButton from "../emojiButton/emojiButton";
import React, { useMemo, useState } from "react";
import { SubGroupParent } from "./emojiSubGroup.styles";
import groupSet from "emojibase-data/meta/groups.json";
import { useAppSelector } from "../../../pages/redux/hooks";

type props = {
  emojiSet: Emoji[];
};
const EmojiSubGroup: React.FC<props> = ({ emojiSet }) => {
  const { subgroups } = groupSet;
  const subGroupKey = emojiSet[0].subgroup;
  const groupName = subGroupKey ? subgroups[subGroupKey] : "smiley";
  const [emojis, setEmojis] = useState<Emoji[]>([...emojiSet]);
  const searchValue = useAppSelector(
    (state) => state.textArea.emojiSearchValue
  );

  useMemo(() => {
    let filtered = emojiSet.filter((em) => {
      // Check if any tag partially matches the searchValue
      let tagMatch = em.tags?.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
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

  if (emojis.length === 0) return null;

  return (
    <SubGroupParent className="emoji-sub-group">
      <div className="subgroup-name">{groupName}</div>
      <div className="subgroup-emojis">
        {emojis.map((emoji, index) => (
          <EmojiButton key={`${emoji.label}${index}`} emoji={emoji} />
        ))}
      </div>
    </SubGroupParent>
  );
};

export default EmojiSubGroup;
