import React, {
  ChangeEventHandler,
  UIEventHandler,
  useRef,
  useState,
} from "react";
import {
  EmojiPickerHeader,
  EmojiPickerParent,
  EmojiSearch,
  HeaderKey,
} from "./emojiPicker.styles";

/* eslint-disable react/react-in-jsx-scope */
import { Emoji } from "emojibase";
import groupSet from "emojibase-data/meta/groups.json";
import { MdSearch } from "react-icons/md";
import useFetchEmojis from "../../pages/content/components/moovy/hooks/useFetchEmojis";
import { useAppDispatch, useAppSelector } from "../../pages/redux/hooks";
import { sliceSetEmojiSearchValue } from "../../pages/redux/slices/textArea/textAreaSlice";
import EmojiGroup from "./emojiGroup/emojiGroup";

export interface subGroup {
  [subKey: number]: Emoji[];
}
export interface refinedG {
  [key: number]: subGroup;
}

const headerEmoji: any = {
  "smileys-emotion": "🤣",
  "people-body": "👨‍👩‍👧",
  "animals-nature": "🐵",
  "food-drink": "🍇",
  "travel-places": "🏖️",
  activities: "🎄",
  objects: "💎",
  symbols: "🛂",
  flags: "🏁",
};

interface EmojiPickerProps {
  onClose?: () => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onClose }) => {
  const { groups } = groupSet;
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const refinedGroups = useFetchEmojis();
  const groupRefs = useRef<(React.RefObject<HTMLDivElement> | null)[]>([]);
  const value = useAppSelector((state) => state.textArea.emojiSearchValue);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const hoveredEmoji = useAppSelector((state) => state.textArea.hoveredEmoji);
  const selectGroup = (groupNum: number) => {
    setGroupNumber(groupNum);
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    if (!groupRefs || !groupRefs.current) return;
    // Store first found visible group index
    let firstVisibleGroupIndex: number | null = null;

    for (let index = 0; index < groupRefs.current.length; index++) {
      const groupRef = groupRefs.current[index];
      const groupElement = groupRef.current;
      if (!groupElement) continue;

      const { top } = groupElement.getBoundingClientRect();
      const parentElement = groupElement.parentElement;

      if (!parentElement) continue;

      const parentTop = parentElement.getBoundingClientRect().top;
      // Check if the group is in view
      if (top <= parentTop && top > 0) {
        // If this is the first visible group, store its index
        if (firstVisibleGroupIndex === null) {
          firstVisibleGroupIndex = index;
        }
      }
    }

    // If there is a visible group, set its index as the group number
    if (firstVisibleGroupIndex !== null) {
      setGroupNumber(firstVisibleGroupIndex);
    }
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    inputRef?.current?.focus();
    if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
      e.stopPropagation();
    }
  };

  const changeValueHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetEmojiSearchValue(e.target.value));
  };

  return (
    <EmojiPickerParent>
      <EmojiSearch>
        <MdSearch size={20} style={{ padding: "0 5px" }} />
        <input
          ref={inputRef}
          type="text"
          id="search"
          onKeyDown={handleInputKeyDown}
          name="search"
          value={value}
          onChange={changeValueHandler}
          onBlur={(e) => {
            e.stopPropagation();
            inputRef.current.focus();
          }}
          placeholder="Search Emoji"
        />
      </EmojiSearch>
      <EmojiPickerHeader>
        {Object.values(groups).map(
          (value, index) =>
            index !== 2 && (
              <HeaderKey
                key={index}
                className="header-key"
                selectedGroup={index === groupNumber}
                onClick={(e) => {
                  e.stopPropagation();
                  selectGroup(index);
                  if (groupRefs.current[index]?.current) {
                    groupRefs.current[index].current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {headerEmoji[value]}
              </HeaderKey>
            )
        )}
      </EmojiPickerHeader>
      <div className="container">
        {refinedGroups && (
          <div className="group-container" onScroll={handleScroll}>
            {Object.values(refinedGroups).map((group, index) => {
              // If this group's ref doesn't exist yet, create it
              if (!groupRefs.current[index]) {
                groupRefs.current[index] = React.createRef();
              }

              // Pass the ref to the EmojiGroup
              return (
                index !== 2 && (
                  <EmojiGroup
                    ref={groupRefs.current[index]}
                    key={index}
                    subGroup={group}
                    groupNumber={groupNumber}
                  />
                )
              );
            })}
          </div>
        )}
      </div>
      {hoveredEmoji && (
        <div className="hovered-emoji">
          <div className="hov-emoji">{hoveredEmoji.emoji}</div>
          <div className="hov-desc">{hoveredEmoji.label}</div>
        </div>
      )}
    </EmojiPickerParent>
  );
};

export default EmojiPicker;
