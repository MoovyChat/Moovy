import { ChatAreaParent, Parent } from './chatArea.styles';
import React, {
  Dispatch,
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { User, globalUIStyles, textMap } from '../../Utils/interfaces';
import { colorLog, getFormattedWordsArray } from '../../Utils/utilities';
import {
  sliceSetIsTextAreaClicked,
  sliceSetIsTextAreaFocused,
  sliceSetTextAreaMessage,
  sliceSetWordSuggestions,
} from '../../redux/slices/textArea/textAreaSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { AnyAction } from 'redux';
import _ from 'lodash';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { msgPlace } from '../../Utils/enums';
import { urqlClient } from '../../Utils/urqlClient';
import { useGetNickNameSuggestionsMutation } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

type props = {
  user: User | undefined;
  postComment: (
    user: User | undefined,
    dispatch: Dispatch<AnyAction>,
    movieId: string,
    replyWindowResponse: any,
    setReplyClickResponse: (e: any) => void
  ) => Promise<void>;
  replyWindowResponse: any;
  setReplyClickResponse: (e: any) => void;
};
const ChatArea: React.FC<props> = ({
  user,
  postComment,
  replyWindowResponse,
  setReplyClickResponse,
}) => {
  const searchAPI =
    'https://corsanywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=';

  const [_nns, getNickNameSuggestions] = useGetNickNameSuggestionsMutation();
  const [globalStyles, setGlobalStyles] = useState<globalUIStyles>();
  const text = useAppSelector((state) => state.textArea.text);
  const textAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const isTextAreaClicked = useAppSelector(
    (state) => state.textArea.isTextAreaClicked
  );
  const movieId = useAppSelector((state) => state.movie.mid);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState<number>(17);
  const [formattedTextMap, setFormattedTextMap] = useState<textMap[]>([]);
  useEffect(() => {
    getStoredGlobalUIStyles().then((styles) => setGlobalStyles(styles));
  }, [globalStyles]);

  useEffect(() => {
    if (textAreaFocussed) textAreaRef.current?.focus();
    else textAreaRef.current?.blur();
  }, [textAreaFocussed]);

  useEffect(() => {
    document.addEventListener('keydown', cancelEvent.bind(this), !0);

    function cancelEvent(e: KeyboardEvent) {
      let target = e.target as HTMLTextAreaElement;
      if (target.id === 'comment') {
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
      let target = e.target as any;
      if (target && (target.id === 'comment' || target.id === 'text-focus')) {
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
      postComment(
        user,
        dispatch,
        movieId,
        replyWindowResponse,
        setReplyClickResponse
      );
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
    const scrollHeight = ref.current?.offsetHeight!;
    setTextAreaHeight(scrollHeight);
    if (!text) setTextAreaHeight(17);
    var objDiv = document.getElementById('text-area-background');
    if (textAreaRef.current && objDiv && ref.current) {
      ref.current.scrollTop = textAreaRef.current.scrollTop!;
    }
  }, [text, textAreaRef.current, ref.current]);

  useEffect(() => {
    let res = getFormattedWordsArray(
      text,
      msgPlace.TEXTAREA,
      dispatch,
      'NO_NEED_TO_SEND_USER_ID',
      0
    );
    setFormattedTextMap(res);
  }, [text]);

  const handleInputText: React.ChangeEventHandler<HTMLTextAreaElement> = async (
    e
  ) => {
    e.stopPropagation();
    e.preventDefault();
    let text = e.target.value;
    dispatch(sliceSetTextAreaMessage(text));
    let words = text.split(' ');
    let lastWord = words[words.length - 1];
    if (lastWord.charAt(0) === '@') {
      let wordToSearch = lastWord.substring(1);
      // get response from graphQL server.
      // Expected response: First three matches.
      getNickNameSuggestions({ search: wordToSearch }).then((res) => {
        const { data, error } = res;
        if (error) colorLog(error);
        if (data) {
          const names: { name: string }[] = data?.getTopThreeUserNames!;
          let refined: string[] = [];
          for (let key in names) {
            refined.push(`@${names[key]['name']}`);
          }
          dispatch(sliceSetWordSuggestions(refined));
        }
      });
    } else {
      let searchURL = `${searchAPI}${lastWord}`;
      // Get Predictive text from Google search API.
      await fetch(searchURL, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => response.text())
        .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then((data) => {
          const el = data.getElementsByTagName('suggestion');
          let firstWordSuggestions: string[] = [];
          let secondWordSuggestions: string[] = [];
          for (let item in el) {
            let _element = el[item];
            if (_element) {
              let node = _element.attributes && _element.attributes[0];
              let value = node && node.nodeValue!.split(' ');
              if (value && !firstWordSuggestions.includes(value[0])) {
                firstWordSuggestions.push(value[0]);
              }
              if (value && !secondWordSuggestions.includes(value[1])) {
                secondWordSuggestions.push(value[1]);
              }
            }
          }
          let suggestions = _.concat(
            firstWordSuggestions,
            secondWordSuggestions
          );
          dispatch(sliceSetWordSuggestions(suggestions));
        });
    }
  };

  return (
    <Parent styles={globalStyles!} textAreaHeight={textAreaHeight}>
      <ChatAreaParent
        ref={textAreaRef}
        styles={globalStyles!}
        textAreaHeight={textAreaHeight}
        autoFocus={false}
        key='editor'
        id='comment'
        name='comment'
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
