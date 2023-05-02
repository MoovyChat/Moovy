import { ChatAreaParent, Parent } from "./chatArea.styles";

import React, {
  Dispatch,
  FocusEventHandler,
  KeyboardEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { AnyAction } from "redux";
import _ from "lodash";

import { withUrqlClient } from "next-urql";
import { User, CommentInfo, textMap } from "../../helpers/interfaces";
import { urqlClient } from "../../helpers/urql/urqlClient";
import { getFormattedWordsArray } from "../../helpers/utilities";
import useDetoxify from "../../pages/content/components/moovy/hooks/useDetoxify";
import usePredictiveText from "../../pages/content/components/moovy/hooks/usePredictiveText";
import { useAppSelector, useAppDispatch } from "../../pages/redux/hooks";
import {
  sliceSetIsTextAreaFocused,
  sliceSetIsTextAreaClicked,
  sliceSetTextAreaMessage,
} from "../../pages/redux/slices/textArea/textAreaSlice";

interface props {
  handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>;
}
const ChatArea: React.FC<props> = ({ handleKeyDown }) => {
  const user = useAppSelector((state) => state.user);

  const text = useAppSelector((state) => state.textArea.text);
  const textAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const isTextAreaClicked = useAppSelector(
    (state) => state.textArea.isTextAreaClicked
  );
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState<number>(17);
  const [formattedTextMap, setFormattedTextMap] = useState<textMap[]>([]);
  const [debouncedText, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const debouncedSetValue = _.debounce((v) => {
      setDebouncedValue(v);
    }, 200);

    debouncedSetValue(text);

    return () => {
      debouncedSetValue.cancel();
    };
  }, [text]);

  usePredictiveText(debouncedText);

  useDetoxify(debouncedText);

  useEffect(() => {
    if (textAreaFocussed) textAreaRef.current?.focus();
    else textAreaRef.current?.blur();
  }, [textAreaFocussed]);

  useEffect(() => {
    document.addEventListener("keydown", cancelEvent.bind(this), !0);

    function cancelEvent(e: KeyboardEvent) {
      const target = e.target as HTMLTextAreaElement;
      if (target.id === "mc-text-area") {
        e.stopImmediatePropagation();
        e.stopPropagation();
        textAreaRef.current?.focus();
      }
    }
    return () => {
      document.removeEventListener("keydown", cancelEvent);
    };
  }, []);

  const handleTextAreaBlur = () => {
    if (isTextAreaClicked) {
      textAreaRef.current?.focus();
      dispatch(sliceSetIsTextAreaFocused(true));
    } else {
      dispatch(sliceSetIsTextAreaFocused(false));
    }
  };

  const placeholder = `Comment as ${
    user?.nickname ? user?.nickname : user?.name
  }`;

  useEffect(() => {
    document.addEventListener("click", textAreaClicked, !0);
    function textAreaClicked(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.id === "mc-text-area" || target.id === "text-focus")
      ) {
        dispatch(sliceSetIsTextAreaClicked(true));
        dispatch(sliceSetIsTextAreaFocused(true));
      } else {
        dispatch(sliceSetIsTextAreaFocused(false));
        dispatch(sliceSetIsTextAreaClicked(false));
      }
    }
    return () => {
      document.removeEventListener("click", textAreaClicked);
    };
  }, []);

  const onFocusHandler: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetIsTextAreaFocused(true));
  };

  const textAreaScrollListener: React.UIEventHandler<
    HTMLTextAreaElement
  > = () => {
    if (textAreaRef.current && ref.current) {
      ref.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  useEffect(() => {
    const scrollHeight = ref.current?.offsetHeight;
    scrollHeight && setTextAreaHeight(() => scrollHeight);
    if (!text) setTextAreaHeight(17);
    const objDiv = document.getElementById("text-area-background");
    if (textAreaRef.current && objDiv && ref.current) {
      ref.current.scrollTop = textAreaRef.current.scrollTop;
    }
  }, [text, textAreaRef.current, ref.current, formattedTextMap]);

  useEffect(() => {
    const res = getFormattedWordsArray(text);
    setFormattedTextMap(res);
  }, [text]);

  const handleInputText: React.ChangeEventHandler<HTMLTextAreaElement> = async (
    e
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const text = e.target.value;
    dispatch(sliceSetTextAreaMessage(text));
  };

  return (
    <Parent textAreaHeight={textAreaHeight}>
      <ChatAreaParent
        ref={textAreaRef}
        textAreaHeight={textAreaHeight}
        autoFocus={false}
        key="editor"
        id="mc-text-area"
        name="mc-text-area"
        autoComplete="off"
        autoCorrect="off"
        maxLength={150}
        onScroll={textAreaScrollListener}
        onFocus={onFocusHandler}
        onBlur={handleTextAreaBlur}
        placeholder={placeholder}
        value={text}
        onKeyPress={handleKeyDown}
        onChange={handleInputText}
      />
      <div id="text-area-background" className="text-area-background" ref={ref}>
        {formattedTextMap.map((value, index) => (
          <span key={index} className={value.type}>
            {value.message + " "}
          </span>
        ))}
      </div>
    </Parent>
  );
};

export default withUrqlClient(urqlClient)(ChatArea);
