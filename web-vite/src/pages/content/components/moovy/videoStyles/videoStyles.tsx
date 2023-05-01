/* eslint-disable react/react-in-jsx-scope */
import { debounce } from "lodash";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { MdBuild } from "react-icons/md";
import { CustomBorder, OptionGroup, VideoParent } from "./videoStyles.styles";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  sliceSetAccentColor,
  sliceSetAutoSkip,
  sliceSetEnableBackground,
  sliceSetFont,
} from "../../../../redux/slices/misc/miscSlice";
import { getVideoElement } from "../contentScript.utils";
import FilterSection from "./filterSection";

const VideoStyles = () => {
  const dispatch = useAppDispatch();
  const autoSkipRef = useRef<HTMLDivElement | null>(null);
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const { accentColor, autoSkip } = useAppSelector((state) => state.misc);
  const [canvas, setCanvas] = useState<HTMLElement>();
  const enableBackground = useAppSelector(
    (state) => state.misc.enableBackground
  );

  // Grab the video player when the component is initiated.
  useEffect(() => {
    getVideoElement().then((res) => {
      setVideoElem(res[0]);
    });
    const playerView = document.querySelector('[data-uia="player"]');
    setCanvas(playerView as HTMLElement);
  }, []);

  const debouncedUpdateColor = debounce((dispatch, color) => {
    dispatch(sliceSetAccentColor(color));
  }, 400);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetFont(e.target.value));
  };

  return (
    <VideoParent>
      <OptionGroup expandGroup={true} color={accentColor}>
        <div className="title">
          <div className="name">
            <div className="name-icon">
              <MdBuild />
            </div>
            <label>Tools</label>
          </div>
        </div>
        <div className="options" ref={autoSkipRef}>
          <div className="tool-option">
            <span className="option-text">Accent Color</span>
            <span className="option-choice">
              <CustomBorder
                style={{ backgroundColor: accentColor }}
                className="accent"
              >
                <input
                  type="color"
                  id="color-picker"
                  name="color-picker"
                  onChange={(e) => {
                    e.stopPropagation();
                    debouncedUpdateColor(dispatch, e.target.value);
                  }}
                />
                <div className="icon" />
              </CustomBorder>
            </span>
          </div>
          <div className="tool-option">
            <span className="option-text">Auto Skip</span>
            <span className="checkBox">
              <input
                type="checkbox"
                id="autoSk"
                defaultChecked={autoSkip}
                onChange={(e) => {
                  e.stopPropagation();
                  dispatch(sliceSetAutoSkip(e.target.checked as boolean));
                  // Add a new div element to the DOM
                  // Check if the div element already exists
                  const existingDiv =
                    document.getElementById("valueChangedDiv");
                  if (!existingDiv) {
                    // Add a new div element to the DOM after the first element

                    const secondDiv = autoSkipRef.current
                      ?.children[1] as HTMLDivElement;
                    const newDiv = document.createElement("div");
                    newDiv.id = "valueChangedDiv";
                    newDiv.className = "tool-option";
                    newDiv.innerHTML = "Reload the page to take effect!";

                    newDiv.style.cssText = `
                    box-shadow: 0 0 4px;
                    padding: 10px 0px;
                    font-weight: 600;
                    font-size: 12px;
                    `;
                    autoSkipRef.current?.insertBefore(
                      newDiv,
                      secondDiv.nextSibling
                    );
                  }
                }}
              />
              <label htmlFor="autoSk"></label>
            </span>
          </div>
          <div className="tool-option">
            <span className="option-text">Enable background</span>
            <span className="checkBox">
              <input
                type="checkbox"
                id="bg"
                defaultChecked={enableBackground}
                onChange={(e) => {
                  e.stopPropagation();
                  dispatch(
                    sliceSetEnableBackground(e.target.checked as boolean)
                  );
                }}
              />
              <label htmlFor="bg"></label>
            </span>
          </div>
          {/* <div className="tool-option">
            <span className="option-text">Font</span>
            <div className="select-container">
              <select
                id="font-selector"
                value={font}
                onChange={handleChange}
                className="select"
              >
                {Object.entries(fonts).map(([key, value]) => (
                  <option
                    key={key}
                    value={value}
                    className="option"
                    style={{ fontFamily: `${value}` }}
                  >
                    {key}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
        </div>
      </OptionGroup>
      <FilterSection videoElem={videoElem} canvas={canvas} />
    </VideoParent>
  );
};

export default VideoStyles;
