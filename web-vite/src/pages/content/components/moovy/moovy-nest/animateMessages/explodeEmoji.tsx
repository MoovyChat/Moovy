import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import { DisplayedSmileys } from "./animateSmiley";
import Emoji from "./emoji";
import { incomingSmileyInterface } from "../../../../../redux/slices/socket/socketSlice";
import { useTimeout } from "../../hooks/useTimeout";
import {
  EXPLOSION_GIF,
  EXPLOSION_GIF_1,
} from "../../../../../../helpers/constants";
import useMousePosition from "../../hooks/useMouseMove";

interface EmojiInterface {
  smiley: incomingSmileyInterface;
  id: string;
  left: number;
  top: number;
  size: number;
  explode: boolean;
  emojis: string[];
}

interface ItemProps {
  item: EmojiInterface;
  style: any;
  setDisplayedSmileys: Dispatch<SetStateAction<DisplayedSmileys>>;
}

const ExplodeEmoji: React.FC<ItemProps> = ({
  item,
  style,
  setDisplayedSmileys,
}) => {
  const [explode, setExplode] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const mousePosition = useMousePosition();
  const [showSpark, setShowSpark] = useState(false);
  const [showEmoji, setShowEmoji] = useState(true);
  useEffect(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      console.log(mousePosition);
      if (
        mousePosition.x !== 0 &&
        mousePosition.y !== 0 &&
        mousePosition.x > rect.left &&
        mousePosition.x < rect.left + rect.width &&
        mousePosition.y > rect.top &&
        mousePosition.y < rect.top + rect.height
      ) {
        // Calculate the center of the spark gif
        const halfEmojiWidth = rect.width / 2;
        const halfEmojiHeight = rect.height / 2;
        const halfGifWidth = 92 / 2;
        const halfGifHeight = 79 / 2;
        const gifLeft = rect.left + halfEmojiWidth - halfGifWidth;
        const gifTop = rect.top + halfEmojiHeight - halfGifHeight;
        setExplode(true);
        setShowSpark(true);
        setShowEmoji(false); // hide emojis immediately when spark starts
        setTimeout(() => {
          setShowSpark(false); // hide spark after 500ms
          setShowEmoji(true); // show emojis after 500ms
        }, 500);

        setDisplayedSmileys((prev) => {
          const updatedSmiley = { ...prev[item.id] };
          updatedSmiley.explode = true;
          updatedSmiley.emojis = Array(7).fill(item?.smiley?.smiley.emoji);
          updatedSmiley.left = gifLeft;
          updatedSmiley.top = gifTop;
          return { ...prev, [item.id]: updatedSmiley };
        });
      }
    }
  }, [item, explode, imageRef.current, mousePosition]);

  useTimeout(
    () => {
      setDisplayedSmileys((prev) => {
        const updatedSmileys = { ...prev };
        delete updatedSmileys[item.id];
        return updatedSmileys;
      });
    },
    explode ? 3000 : null
  );

  return (
    <div>
      {showSpark && (
        <img
          src={EXPLOSION_GIF_1}
          style={{
            position: "absolute",
            left: `${item.left}px`,
            top: `${item.top}px`,
          }}
        />
      )}
      {!explode ? (
        <animated.img
          ref={imageRef}
          key={item?.smiley?.id}
          src={item?.smiley?.smiley.url}
          style={{
            ...style,
            left: `${item.left}px`,
            width: `${35 + Math.random() * 30}px`,
            position: "absolute",
            cursor: "pointer",
            transition: "all 0.5s linear",
          }}
        />
      ) : (
        showEmoji &&
        item.emojis.map((emoji: string, index: number) => (
          <Emoji
            key={`${item.id}-${index}`}
            startX={item.left}
            startY={item.top}
          >
            {emoji}
          </Emoji>
        ))
      )}
    </div>
  );
};

export default ExplodeEmoji;
