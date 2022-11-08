import { ChatAreaParent, Parent } from './messageBox.styles';
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  UIEventHandler,
  useRef,
  useState,
} from 'react';

const MessageBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreaScrollListener: UIEventHandler<HTMLTextAreaElement> = () => {};
  const onFocusHandler: FocusEventHandler<HTMLTextAreaElement> = () => {};
  const textAreaBlurHandler: FocusEventHandler<HTMLTextAreaElement> = () => {};
  const placeholder = "What's up!!";
  const [text, setText] = useState<string>('');
  const textAreaHeight = 500;
  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = () => {};
  const handleInputText: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.stopPropagation();
    setText(e.target.value);
  };
  return (
    <Parent textAreaHeight={textAreaHeight}>
      <ChatAreaParent
        ref={textAreaRef}
        textAreaHeight={textAreaHeight}
        autoFocus={false}
        key='editor'
        id='comment'
        name='comment'
        autoComplete='off'
        autoCorrect='off'
        maxLength={500}
        onScroll={textAreaScrollListener}
        onFocus={onFocusHandler}
        onBlur={textAreaBlurHandler}
        placeholder={placeholder}
        value={text}
        onKeyPress={handleKeyDown}
        onChange={handleInputText}
      />
      {/* <div id='text-area-background' className='text-area-background' ref={ref}>
        {formattedTextMap.map((value, index) => (
          <span key={index} className={value.type}>
            {value.message + ' '}
          </span>
        ))}
        {text}
      </div> */}
    </Parent>
  );
};

export default MessageBox;
