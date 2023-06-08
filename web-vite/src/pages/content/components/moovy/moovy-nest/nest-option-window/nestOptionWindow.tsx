import React from "react";
import { StyledOptionWindow } from "./nestOptionWindow.styles";
import FrequentEmojis from "../../../../../../components/smiley-window/frequentEmojis";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { sliceSetTextAreaMessage } from "../../../../../redux/slices/textArea/textAreaSlice";

const NestOptionWindow = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.textArea.text);
  const wordSuggestions: string[] = useAppSelector(
    (state) => state.textArea.wordSuggestions
  );

  const handleWord: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const el = e.target as HTMLDivElement;
    const msgArr = text.split(" ");
    msgArr.pop();
    el.textContent && msgArr.push(el.textContent);
    dispatch(sliceSetTextAreaMessage(msgArr.join(" ")));
  };

  return (
    <StyledOptionWindow>
      <FrequentEmojis />
      {wordSuggestions && wordSuggestions.length > 0 && (
        <div className="section">
          <div className="title">Suggestions</div>
          <div className="wn-suggestions">
            {wordSuggestions.slice(0, 3).map((word, key) => (
              <div
                id="text-focus"
                className="word"
                key={`${key}-${word}`}
                onClick={handleWord}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      )}
    </StyledOptionWindow>
  );
};

export default NestOptionWindow;
