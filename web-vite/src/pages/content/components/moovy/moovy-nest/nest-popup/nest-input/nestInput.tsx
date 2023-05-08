import React, {
  Dispatch,
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
} from "react";
import { StyledInputElement } from "../create-nest/createNest.styles";

interface NestInputProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  value: string;
}
const NestInput: React.FC<NestInputProps> = ({ value, setValue }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleFocus = () => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };
  const onBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    handleFocus();
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setValue(() => e.target.value);
    handleFocus();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
      e.stopPropagation();
      handleFocus();
    }
  };

  return (
    <StyledInputElement
      required
      ref={ref}
      value={value}
      placeholder="Nest Name"
      maxLength={100}
      onBlur={onBlurHandler}
      onClick={() => {
        handleFocus();
      }}
      onInput={() => {
        handleFocus();
      }}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onFocus={() => handleFocus()}
    />
  );
};

export default NestInput;
