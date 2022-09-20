import React from 'react';
import { MouseEvent } from 'react';
import { IconType } from 'react-icons/lib';
import { ButtonIcon, ButtonText, ButtonWindow } from './button.styles';

type props = {
  iconSize?: number;
  bgColor: string;
  textColor: string;
  text: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  padding: string;
  Icon?: IconType;
  textShadow?: string;
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
}) => {
  return (
    <ButtonWindow
      bgColor={bgColor}
      textColor={textColor}
      onClick={onClick}
      padding={padding}>
      <ButtonIcon>{Icon ? <Icon size={iconSize} /> : null}</ButtonIcon>
      <ButtonText textShadow={textShadow}>{text}</ButtonText>
    </ButtonWindow>
  );
};

export default Button;
