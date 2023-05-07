import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";
import {
  CustomSwitch,
  Root,
  StyledCreateNest,
  StyledInputElement,
} from "./createNest.styles";
import { Input, Switch } from "@mui/base";
import { StyledNestButton } from "../../nest-login/nestLogin.styles";
import { useAppDispatch } from "../../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../../helpers/enums";

const CustomInput = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

const CreateNest = () => {
  const label = { slotProps: { input: { "aria-label": "Public" } } };
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef(null);
  const closeHandler = () => {
    dispatch(sliceSetNestVisibility(false));
    dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
      e.stopPropagation();
    }
  };

  const handleFocus = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setValue(e.target.value);
  };

  const onBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    inputRef?.current?.focus();
  };

  return (
    <StyledCreateNest>
      <CustomInput
        ref={inputRef}
        aria-label="Create Nest"
        placeholder="Nest Name"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        onBlur={onBlurHandler}
        onFocus={() => handleFocus()}
      />
      <CustomSwitch>
        <label htmlFor="public">Public</label>
        <Switch
          className="public"
          slots={{
            root: Root,
          }}
          {...label}
          defaultChecked
        />
      </CustomSwitch>
      <div className="container">
        <StyledNestButton
          nestColor="#02b61a"
          nestHover="#039b17"
          nestActive="#03a519"
          size={12}
        >
          <div>Create</div>
        </StyledNestButton>
        <StyledNestButton
          nestColor="#b60202"
          nestHover="#930404"
          nestActive="#6c0303"
          size={12}
          onClick={closeHandler}
        >
          <div>Cancel</div>
        </StyledNestButton>
      </div>
    </StyledCreateNest>
  );
};

export default CreateNest;
