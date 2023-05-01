import { ButtonIcon, ButtonText, ButtonWindow } from "./button.styles";

import { IconType } from "react-icons/lib";
import { MouseEvent } from "react";
import React from "react";

type props = {
  iconSize?: number;
  bgColor: string;
  textColor: string;
  text: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  padding: string;
  Icon?: IconType;
  textShadow?: string;
  className: string;
  id?: string;
};
const Button: React.FC<props> = ({
  iconSize,
  bgColor,
  textColor,
  onClick,
  text,
  padding,
  Icon,
  textShadow,
  className,
  id,
}) => {
  return (
    <ButtonWindow
      id={id}
      className={className}
      bgColor={bgColor}
      textColor={textColor}
      onClick={onClick}
      padding={padding}
    >
      {Icon ? (
        <ButtonIcon>
          <Icon size={iconSize} />
        </ButtonIcon>
      ) : null}
      <ButtonText textShadow={textShadow}>{text}</ButtonText>
    </ButtonWindow>
  );
};

export default Button;
