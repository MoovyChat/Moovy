import { ChatAreaParent, Parent } from './chatArea.styles';
import React, {
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { User, globalUIStyles, textMap } from '../../Utils/interfaces';
import { getFormattedWordsArray, isNumber } from '../../Utils/utilities';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { AnyAction } from 'redux';
import { GiSpanner } from 'react-icons/gi';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { msgPlace } from '../../Utils/enums';

type props = {
  user: User | undefined;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  postComment: (
    text: string,
    setText: Dispatch<SetStateAction<string>>,
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
  text,
  setText,
  postComment,
  replyWindowResponse,
  setReplyClickResponse,
}) => {
  const [globalStyles, setGlobalStyles] = useState<globalUIStyles>();
  const movieId = useAppSelector((state) => state.movie.mid);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [clickedTA, setClickedTA] = useState<boolean>(false);
  const [formattedTextMap, setFormattedTextMap] = useState<textMap[]>([]);
  useEffect(() => {
    getStoredGlobalUIStyles().then((styles) => setGlobalStyles(styles));
  }, [globalStyles]);

  useEffect(() => {
    document.addEventListener('keydown', cancelEvent.bind(this), !0);

    function cancelEvent(e: KeyboardEvent) {
      let target = e.target as HTMLTextAreaElement;
      if (target.id === 'comment') {
        e.stopImmediatePropagation();
        e.stopPropagation();
        ref.current?.focus();
      }
    }
    return () => {
      document.removeEventListener('keydown', cancelEvent);
    };
  }, []);

  const handleTextAreaBlur = () => {
    if (clickedTA) ref.current?.focus();
  };

  const placeholder = `Comment as ${
    user?.nickname ? user?.nickname : user?.name
  }`;

  useEffect(() => {
    document.addEventListener('click', textAreaClicked, !0);
    function textAreaClicked(e: MouseEvent) {
      let target = e.target as HTMLTextAreaElement;
      if (target.id === 'comment') {
        setClickedTA(true);
      } else setClickedTA(false);
    }
    return () => {
      document.removeEventListener('click', textAreaClicked);
    };
  }, []);

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.stopPropagation();
      e.isPropagationStopped();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      postComment(
        text,
        setText,
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

  useEffect(() => {
    var objDiv = document.getElementById('text-area-background');
    if (ref.current && objDiv) objDiv.scrollTop = ref.current.scrollTop!;
  }, [ref.current?.scrollTop]);

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

  return (
    <Parent styles={globalStyles!}>
      <ChatAreaParent
        styles={globalStyles!}
        ref={ref}
        autoFocus
        key='editor'
        id='comment'
        name='comment'
        autoComplete='off'
        autoCorrect='off'
        maxLength={150}
        onBlur={handleTextAreaBlur}
        placeholder={placeholder}
        value={text}
        onKeyPress={handleKeyDown}
        onChange={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setText(e.target.value);
        }}
      />
      <div id='text-area-background' className='text-area-background'>
        {formattedTextMap.map((value, index) => (
          <span key={index} className={value.type}>
            {value.message + ' '}
          </span>
        ))}
      </div>
    </Parent>
  );
};

export default ChatArea;
