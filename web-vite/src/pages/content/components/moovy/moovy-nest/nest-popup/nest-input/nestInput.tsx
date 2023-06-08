import React, {
  Dispatch,
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
} from "react";
import { StyledInputElement } from "../create-nest/createNest.styles";
import { useAppDispatch } from "../../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../../helpers/enums";

interface NestInputProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  value: string;
  type: string;
  onEnter: any;
}
const NestInput: React.FC<NestInputProps> = ({
  value,
  setValue,
  type,
  onEnter,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
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
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Escape") {
      dispatch(sliceSetNestVisibility(false));
      dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
    } else if (
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "A" && e.key <= "Z")
    ) {
      e.stopPropagation();
      handleFocus();
    }
  };

  return (
    <StyledInputElement
      required
      ref={ref}
      value={value}
      placeholder={`${type === "create" ? "Nest Name" : "Nest Invite Id"}`}
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
