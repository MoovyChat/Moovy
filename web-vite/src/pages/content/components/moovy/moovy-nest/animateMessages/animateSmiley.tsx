// Existing imports
import { useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../redux/hooks";
import { incomingSmileyInterface } from "../../../../../redux/slices/socket/socketSlice";
import { StyledAnimateSmiley } from "./animateMessages.styles";
import ExplodeEmoji from "./explodeEmoji";

// Existing interfaces
export interface DisplayedSmileys {
  [key: string]: {
    smiley: incomingSmileyInterface;
    id: string;
    left: number;
    top: number;
    size: number;
    explode: boolean;
    emojis: string[];
    timestamp: number; // Add timestamp field
  };
}

const AnimateSmiley = () => {
  const smileys = useAppSelector((state) => state.socket.smileys);
  const [displayedSmileys, setDisplayedSmileys] = useState<DisplayedSmileys>(
    {}
  );
  const [lastAddedMessage, setLastAddedMessage] =
    useState<incomingSmileyInterface | null>(null);

  useEffect(() => {
    const latestSmiley = smileys[smileys.length - 1];

    if (latestSmiley && latestSmiley.id !== lastAddedMessage?.id) {
      const timestamp = new Date().getTime();
      const id = `smiley-${timestamp}`;
      const parentWidth =
        document.getElementById("parent-smileys")?.offsetWidth; // replace 'parent-element-id' with the id of your parent element
      // Subtract the size of the emoji and buffer space (if any) to ensure it doesn't overflow the parent view.
      const left = Math.random() * (parentWidth - 50);
      const top = Math.random() * (window.innerHeight - 50); // Same here.
      setDisplayedSmileys((prev) => ({
        ...prev,
        [id]: {
          smiley: latestSmiley,
          id,
          left,
          top,
          size: 50,
          explode: false,
          emojis: [],
          timestamp, // Add the current timestamp here
        },
      }));

      setLastAddedMessage(latestSmiley);
    }
  }, [smileys, lastAddedMessage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();

      setDisplayedSmileys((prev) => {
        const updatedSmileys = { ...prev };

        for (let key in updatedSmileys) {
          const smiley = updatedSmileys[key];

          // If the smiley has been displayed for more than 5 seconds, remove it
          if (currentTime - smiley.timestamp >= 5000) {
            delete updatedSmileys[key];
          }
        }

        return updatedSmileys;
      });
    }, 1000); // Check every second

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

  const transitions = useTransition(Object.values(displayedSmileys), {
    keys: (smiley) => `${smiley?.smiley?.id}-${smiley?.timestamp}`, // combine id and timestamp for a unique key
    from: { bottom: `-${window.innerHeight * 0.03}px`, opacity: 1 }, // -3% of the screen height
    enter: { bottom: `${window.innerHeight}px`, opacity: 1 }, // 100% of the screen height
    leave: { bottom: `${window.innerHeight}px`, opacity: 1 }, // 100% of the screen height
    config: { duration: 3000 }, // 3 seconds animation
    onRest: (result, ctrl, item) => {
      if (!result) {
        setDisplayedSmileys((prev) => {
          const updatedSmileys = { ...prev };
          delete updatedSmileys[item.id];
          return updatedSmileys;
        });
      }
    },
  });

  return (
    <StyledAnimateSmiley id="parent-smileys">
      {transitions((style, item) => (
        <ExplodeEmoji
          item={item}
          style={style}
          setDisplayedSmileys={setDisplayedSmileys}
        />
      ))}
    </StyledAnimateSmiley>
  );
};

export default AnimateSmiley;
