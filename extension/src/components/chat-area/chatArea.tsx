import { ChatAreaParent, Parent } from './chatArea.styles';
import { NameObject, User, textMap } from '../../Utils/interfaces';
import React, {
  Dispatch,
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  sliceSetIsTextAreaClicked,
  sliceSetIsTextAreaFocused,
  sliceSetNameSuggestions,
  sliceSetTextAreaMessage,
  sliceSetWordSuggestions,
} from '../../redux/slices/textArea/textAreaSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { AnyAction } from 'redux';
import _ from 'lodash';
import { getFormattedWordsArray } from '../../Utils/utilities';
import { msgPlace } from '../../Utils/enums';
import { urqlClient } from '../../Utils/urqlClient';
import useDetoxify from '../../contentScript/hooks/useDetoxify';
import { useGetNickNameSuggestionsMutation } from '../../generated/graphql';
import usePredictiveText from '../../contentScript/hooks/usePredictiveText';
import { withUrqlClient } from 'next-urql';

type props = {
  postComment: (
    user: User | undefined,
    dispatch: Dispatch<AnyAction>,
    replyWindowResponse: any,
    setReplyClickResponse: (e: any) => void
  ) => Promise<void>;
  replyWindowResponse: any;
  setReplyClickResponse: (e: any) => void;
};
const ChatArea: React.FC<props> = ({
  postComment,
  replyWindowResponse,
  setReplyClickResponse,
}) => {
  const searchAPI =
    'https://corsanywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=';
  const user = useAppSelector((state) => state.user);

  const text = useAppSelector((state) => state.textArea.text);
  const textAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const isTextAreaClicked = useAppSelector(
    (state) => state.textArea.isTextAreaClicked
  );
  const movieId = useAppSelector((state) => state.movie.id);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState<number>(17);
  const [formattedTextMap, setFormattedTextMap] = useState<textMap[]>([]);
  const [debouncedText, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const debouncedSetValue = _.debounce((v) => {
      setDebouncedValue(v);
    }, 200);

    debouncedSetValue(text);

    return () => {
      debouncedSetValue.cancel();
    };
  }, [text]);

  usePredictiveText(searchAPI, debouncedText);

  useDetoxify(debouncedText);

  useEffect(() => {
    if (textAreaFocussed) textAreaRef.current?.focus();
    else textAreaRef.current?.blur();
  }, [textAreaFocussed]);

  useEffect(() => {
    document.addEventListener('keydown', cancelEvent.bind(this), !0);

    function cancelEvent(e: KeyboardEvent) {
      let target = e.target as HTMLTextAreaElement;
      if (target.id === 'mc-text-area') {
        e.stopImmediatePropagation();
        e.stopPropagation();
        textAreaRef.current?.focus();
      }
    }
    return () => {
      document.removeEventListener('keydown', cancelEvent);
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
    document.addEventListener('click', textAreaClicked, !0);
    function textAreaClicked(e: MouseEvent) {
      let target = e.target as HTMLElement;
      if (
        target &&
        (target.id === 'mc-text-area' || target.id === 'text-focus')
      ) {
        dispatch(sliceSetIsTextAreaClicked(true));
        dispatch(sliceSetIsTextAreaFocused(true));
      } else {
        dispatch(sliceSetIsTextAreaFocused(false));
        dispatch(sliceSetIsTextAreaClicked(false));
      }
    }
    return () => {
      document.removeEventListener('click', textAreaClicked);
    };
  }, []);

  const onFocusHandler: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetIsTextAreaFocused(true));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.stopPropagation();
      e.isPropagationStopped();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      postComment(user, dispatch, replyWindowResponse, setReplyClickResponse);
    } else if (
      (e.key >= 'a' && e.key <= 'z') ||
      (e.key >= 'A' && e.key <= 'Z')
    ) {
      e.stopPropagation();
    }
  };

  const textAreaScrollListener: React.UIEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (textAreaRef.current && ref.current) {
      ref.current.scrollTop = textAreaRef.current.scrollTop!;
    }
  };

  useEffect(() => {
    let scrollHeight = ref.current?.offsetHeight!;
    setTextAreaHeight(() => scrollHeight);
    if (!text) setTextAreaHeight(17);
    var objDiv = document.getElementById('text-area-background');
    if (textAreaRef.current && objDiv && ref.current) {
      ref.current.scrollTop = textAreaRef.current.scrollTop!;
    }
  }, [text, textAreaRef.current, ref.current, formattedTextMap]);

  useEffect(() => {
    let res = getFormattedWordsArray(text);
    setFormattedTextMap(res);
  }, [text]);

  const handleInputText: React.ChangeEventHandler<HTMLTextAreaElement> = async (
    e
  ) => {
    e.stopPropagation();
    e.preventDefault();
    let text = e.target.value;
    dispatch(sliceSetTextAreaMessage(text));
  };

  return (
    <Parent textAreaHeight={textAreaHeight}>
      <ChatAreaParent
        ref={textAreaRef}
        textAreaHeight={textAreaHeight}
        autoFocus={false}
        key='editor'
        id='mc-text-area'
        name='mc-text-area'
        autoComplete='off'
        autoCorrect='off'
        maxLength={150}
        onScroll={textAreaScrollListener}
        onFocus={onFocusHandler}
        onBlur={handleTextAreaBlur}
        placeholder={placeholder}
        value={text}
        onKeyPress={handleKeyDown}
        onChange={handleInputText}
      />
      <div id='text-area-background' className='text-area-background' ref={ref}>
        {formattedTextMap.map((value, index) => (
          <span key={index} className={value.type}>
            {value.message + ' '}
          </span>
        ))}
      </div>
    </Parent>
  );
};

export default withUrqlClient(urqlClient)(ChatArea);
