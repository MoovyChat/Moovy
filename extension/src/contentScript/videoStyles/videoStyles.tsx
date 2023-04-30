/* eslint-disable react/react-in-jsx-scope */
import {
  BoxShadows,
  CustomBorder,
  OptionGroup,
  VideoParent,
} from './videoStyles.styles';
import {
  ChangeEventHandler,
  FocusEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MdAdd, MdBuild, MdOutlineWbIridescent } from 'react-icons/md';
import _, { debounce } from 'lodash';
import { addBorder, borders } from './videoStyles.help';
import {
  getStoredCustomBorders,
  getStoredResizeValue,
  setStoredCustomBorder,
} from '../../Utils/storage';
import {
  sliceSetAccentColor,
  sliceSetAutoSkip,
  sliceSetEnableBackground,
  sliceSetFont,
  sliceSetOpenBorderSection,
} from '../../redux/slices/misc/miscSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import FilterSection from './filterSection';
import { borderType } from '../../Utils/interfaces';
import { fonts } from '../../constants';
import { getVideoElement } from '../contentScript.utils';
import { sliceSetVideoSize } from '../../redux/slices/settings/settingsSlice';

const VideoStyles = () => {
  const dispatch = useAppDispatch();
  const autoSkipRef = useRef<HTMLDivElement | null>(null);
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const { accentColor, autoSkip, font } = useAppSelector((state) => state.misc);
  const [canvas, setCanvas] = useState<HTMLElement>();
  const enableBackground = useAppSelector(
    (state) => state.misc.enableBackground
  );
  const openBorderSection = useAppSelector(
    (state) => state.misc.openBorderSection
  );
  const [screenSize, setScreenSize] = useState<string>('100');
  const [customBorders, setCustomBorders] = useState<borderType[]>([]);

  useEffect(() => {
    // Get Custom borders.
    getStoredCustomBorders().then((cb) => setCustomBorders(cb));

    // Get stored resize value.
    getStoredResizeValue().then((res) => {
      setScreenSize(res);
      dispatch(sliceSetVideoSize(res));
    });
  }, []);

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

  const onColorBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    const border: borderType = {
      color: e.target.value,
      title: e.target.value,
    };
    setStoredCustomBorder(border);
    setCustomBorders((current) => {
      const newBorders = [border, ...current];
      const uniqBorders = _.uniqBy(newBorders, 'color');
      if (uniqBorders.length > 10) uniqBorders.pop();
      return uniqBorders;
    });
  };

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
                    document.getElementById('valueChangedDiv');
                  if (!existingDiv) {
                    // Add a new div element to the DOM after the first element

                    const secondDiv = autoSkipRef.current
                      ?.children[1] as HTMLDivElement;
                    const newDiv = document.createElement('div');
                    newDiv.id = 'valueChangedDiv';
                    newDiv.className = 'tool-option';
                    newDiv.innerHTML = 'Reload the page to take effect!';

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
          <div className="tool-option">
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
          </div>
        </div>
      </OptionGroup>
      <FilterSection videoElem={videoElem} canvas={canvas} />
      <OptionGroup expandGroup={openBorderSection} color={accentColor}>
        <div className="title">
          <div className="name">
            <div className="name-icon">
              <MdOutlineWbIridescent />
            </div>
            <label>Ambience</label>
          </div>
          <div className="edge">
            <span className="checkBox">
              <input
                type="checkbox"
                id="bd"
                defaultChecked={openBorderSection}
                onChange={(e) => {
                  e.stopPropagation();
                  dispatch(sliceSetOpenBorderSection(e.target.checked));
                  if (!e.target.checked) {
                    addBorder(canvas, screenSize, borders[0]);
                  }
                }}
              />
              <label htmlFor="bd"></label>
            </span>
          </div>
        </div>
        <div className="options">
          <div className="ready">
            <label>Available</label>
            <div className="border-list">
              {borders.map((border) => {
                return (
                  border.title !== 'default' && (
                    <BoxShadows
                      className="option"
                      color={border.color}
                      key={border.title}
                      onClick={() => {
                        addBorder(canvas, screenSize, border);
                      }}
                    />
                  )
                );
              })}
            </div>
          </div>
          <div className="ready">
            <label>Custom</label>
            <div className="border-list">
              <div className="custom-option">
                <CustomBorder>
                  <input
                    type="color"
                    id="color-picker"
                    name="color-picker"
                    onBlur={onColorBlurHandler}
                    onChange={(e) => {
                      e.stopPropagation();
                      const border: borderType = {
                        title: 'custom',
                        color: e.target.value,
                      };
                      addBorder(canvas, screenSize, border);
                    }}
                  />
                  <MdAdd size={20} className="icon" />
                </CustomBorder>
              </div>
              {customBorders.map((border) => {
                return (
                  border.title !== 'default' && (
                    <div className="custom-option">
                      <BoxShadows
                        color={border.color}
                        key={border.title}
                        onClick={() => {
                          addBorder(canvas, screenSize, border);
                        }}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </OptionGroup>
    </VideoParent>
  );
};

export default VideoStyles;
