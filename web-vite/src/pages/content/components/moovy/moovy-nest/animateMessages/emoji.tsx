import { useRef, useState } from "react";
import {
  config,
  useSpring,
  animated,
  useSpringRef,
  useChain,
} from "@react-spring/web";

interface EmojiProps {
  startX: number;
  startY: number;
  children: any;
}

const Emoji: React.FC<EmojiProps> = ({ children, startX, startY }) => {
  // Create state for the endX and endY values
  const [endX] = useState(Math.random() * window.innerWidth);
  const [endY] = useState(Math.random() * window.innerHeight);

  const moveRef = useSpringRef();

  const moveStyles = useSpring({
    ref: moveRef,
    from: { transform: `translate3d(${startX}px, ${startY}px, 0)` },
    to: { transform: `translate3d(${endX}px, ${endY}px, 0)` },
    config: config.slow, // Choose your desired config
  });

  const fadeRef = useSpringRef();
  const fadeStyles = useSpring({
    ref: fadeRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
  });

  useChain([moveRef, fadeRef], [0, 0.8]); // adjust the timing as per your requirement

  return (
    <animated.div
      style={{
        ...moveStyles,
        ...fadeStyles,
        fontSize: "20px",
        position: "absolute",
      }}
    >
      {children}
    </animated.div>
  );
};

export default Emoji;
