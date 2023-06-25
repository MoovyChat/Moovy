import React, { useContext, useState } from "react";
import { StyledAnimatedSmileys } from "./animatedSmileys.styles";
import { ANIMATED_SMILEYS } from "../../../../../../helpers/constants";
import { SocketContext } from "../../context/socketContextFile";
import { useAppSelector } from "../../../../../redux/hooks";
import { nanoid } from "nanoid";

const AnimatedSmileys = () => {
  const socket = useContext(SocketContext);
  const user = useAppSelector((state) => state.user);
  const roomId = useAppSelector((state) => state.socket.roomId);
  const [hoveredSmiley, setHoveredSmiley] = useState(null);
  const handleSmileyClick = (smiley: { url: string; emoji: string }) => {
    let id = nanoid(10);
    socket.emit("smiley", {
      roomId: roomId,
      data: {
        id,
        user,
        smiley: smiley,
      },
    });
  };
  return (
    <StyledAnimatedSmileys>
      {Object.values(ANIMATED_SMILEYS).map((smiley) => (
        <div
          className="animated-smiley"
          key={smiley.url}
          onMouseEnter={() => setHoveredSmiley(smiley.url)}
          onMouseLeave={() => setHoveredSmiley(null)}
          onClick={(e) => {
            e.stopPropagation();
            handleSmileyClick(smiley);
          }}
        >
          <img
            src={hoveredSmiley === smiley.url ? smiley.url : smiley.static}
            alt="animated-smileys"
          />
        </div>
      ))}
    </StyledAnimatedSmileys>
  );
};

export default AnimatedSmileys;
