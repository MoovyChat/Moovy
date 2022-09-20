import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { EditNickNameParent } from './editNickName.styles';
import { setStoredUserLoginDetails } from '../../Utils/storage';
import { sliceAddUserNickName } from '../../redux/slices/user/userSlice';
import { sliceCheckEditBoxOpen } from '../../redux/slices/loading/loadingSlice';
import { updateUser } from '../../firebase-api/user';

const EditUserName = () => {
  const [err, setError] = useState<string>('');
  const nickName = useAppSelector((state) => state.user.nickname);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [text, setText] = useState<string>(nickName);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [clickedTA, setClickedTA] = useState<boolean>(false);

  const validateText = (inputText: string) => {
    setText(inputText);
    let usernameRegex = /^[a-zA-Z0-9_@$.]+$/;
    let isValid = usernameRegex.test(inputText);
    if (!isValid) setError('Name is invalid!');
    else setError('');
  };
  const confirmUserName = () => {
    updateUser(user.uid, { nickname: text }).then((res) => {
      dispatch(sliceAddUserNickName(text));
      setStoredUserLoginDetails(user);
      dispatch(sliceCheckEditBoxOpen(false));
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', cancelEvent.bind(this), !0);

    function cancelEvent(e: KeyboardEvent) {
      let target = e.target as HTMLTextAreaElement;
      if (target.id === 'edit-user-name-input') {
        e.stopImmediatePropagation();
        e.stopPropagation();
        inputRef.current?.focus();
      }
    }
    return () => {
      document.removeEventListener('keydown', cancelEvent);
    };
  }, []);

  const handleTextAreaBlur = () => {
    if (clickedTA) {
      inputRef.current?.focus();
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.stopPropagation();
      e.isPropagationStopped();
    } else if (e.key === 'Enter') {
      e.stopPropagation();
      if (!err) confirmUserName();
    }
  };

  useEffect(() => {
    document.addEventListener('click', textAreaClicked, !0);
    function textAreaClicked(e: MouseEvent) {
      let target = e.target as HTMLInputElement;
      console.log(target.id);
      if (target.id === 'edit-user-name-input') {
        setClickedTA(true);
      } else setClickedTA(false);
      if (!target.id.includes('edit-user-name')) {
        dispatch(sliceCheckEditBoxOpen(false));
      }
    }
    return () => {
      document.removeEventListener('click', textAreaClicked);
    };
  }, []);

  return (
    <EditNickNameParent
      className='edit-user-name'
      id='edit-user-name'
      isError={err === '' ? false : true}>
      <div className='edit-user-name-title' id='edit-user-name-title'>
        Change User Name
      </div>
      <div className='edit-user-name-box' id='edit-user-name-box'>
        <input
          ref={inputRef}
          className='edit-user-name-input'
          id='edit-user-name-input'
          type='text'
          value={text}
          size={5}
          onBlur={handleTextAreaBlur}
          onKeyPress={handleKeyDown}
          onChange={(e) => {
            e.stopPropagation();
            validateText(e.target.value);
          }}
          placeholder='Enter your user name'
          maxLength={15}
        />
      </div>
      {err && (
        <div
          className='edit-user-name-err'
          id='edit-user-name-err'
          style={{ color: 'red', fontSize: '1.5em' }}>
          {err}
        </div>
      )}
    </EditNickNameParent>
  );
};

export default EditUserName;
