import React from "react";
import { StyledToxicitySlider } from "./toxicitySlider.styles";

interface ToxicitySliderProps {
  text: string;
  scores: { [label: string]: number };
}

const ToxicitySlider = ({ text, scores }: ToxicitySliderProps) => {
  const getScoreColor = (score: number) => {
    const hue = ((1 - score) * 120).toString(10);
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <StyledToxicitySlider className="toxicity-slider">
      {Object.entries(scores).map(([label, score]) => (
        <div className="toxicity-container" key={label}>
          <div className="toxicity-slider-label">{text}</div>
          <div key={label} className="toxicity-slider-row">
            <div className="toxicity-slider-value">
              {(score * 100).toFixed(1)}
            </div>
            <div className="toxicity-slider-bar">
              <div
                className="toxic-slider-child"
                style={{
                  backgroundColor: getScoreColor(score),
                  width: `${score * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </StyledToxicitySlider>
  );
};

export default ToxicitySlider;
