import EmojiSubGroup from "../emojiSubGroup/emojiSubGroup";
import { GroupParent } from "./emojiGroup.styles";
import React, { ForwardedRef } from "react";
import { subGroup } from "../emojiPicker";

type Props = {
  subGroup: subGroup;
  groupNumber: number;
};

const EmojiGroup = React.forwardRef<HTMLDivElement, Props>(
  ({ subGroup, groupNumber }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <GroupParent ref={ref}>
        {subGroup &&
          Object.values(subGroup).map((value, index) => (
            <EmojiSubGroup key={index} emojiSet={value} />
          ))}
      </GroupParent>
    );
  }
);

export default EmojiGroup;
