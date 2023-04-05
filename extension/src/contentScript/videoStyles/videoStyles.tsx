/* eslint-disable react/react-in-jsx-scope */
import {
  BoxShadows,
  CustomBorder,
  FilterView,
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
import {
  MdAdd,
  MdBuild,
  MdFilterAlt,
  MdOutlineWbIridescent,
} from 'react-icons/md';
import _, { debounce } from 'lodash';
import { addBorder, applyFilter, borders, filters } from './videoStyles.help';
import {
  borderType,
  filterType,
  videoFilterSettings,
} from '../../Utils/interfaces';
import {
  getStoredCustomBorders,
  getStoredFilterValues,
  getStoredResizeValue,
  getStoredVideoFilters,
  setStoredCustomBorder,
  setStoredFilterValues,
  setStoredResizeValue,
  setStoredVideoFilters,
} from '../../Utils/storage';
import {
  sliceSetAccentColor,
  sliceSetAutoSkip,
  sliceSetEnableBackground,
  sliceSetFont,
  sliceSetOpenBorderSection,
  sliceSetOpenFilterSection,
} from '../../redux/slices/misc/miscSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import Slider from '../../components/slider/slider';
import { defaultVideoValues } from '../../Utils/defaultValues';
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
  const openFilterSection = useAppSelector(
    (state) => state.misc.openFilterSection
  );
  const openBorderSection = useAppSelector(
    (state) => state.misc.openBorderSection
  );
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);
  const [screenSize, setScreenSize] = useState<string>('100');
  const thumbs = useAppSelector((state) => state.movie.thumbs);
  const [customBorders, setCustomBorders] = useState<borderType[]>([]);
  const [filterValues, setFilterValues] = useState<videoFilterSettings>({
    blur: '0',
    contrast: '1',
    brightness: '1',
    grayscale: '0',
    invert: '0',
    sepia: '0',
    saturate: '100',
    hue: '0',
  });

  useEffect(() => {
    // Get selected filters from the local storage.
    getStoredVideoFilters().then((filters) => setSelectedFilters(filters));

    // Get Custom borders.
    getStoredCustomBorders().then((cb) => setCustomBorders(cb));

    // Get stored resize value.
    getStoredResizeValue().then((res) => {
      setScreenSize(res);
      dispatch(sliceSetVideoSize(res));
    });

    // Set filter values from storage
    getStoredFilterValues().then((filterVal: videoFilterSettings) => {
      if (filterVal) setFilterValues(filterVal);
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

  // Set the filter to the video.
  const setFilter = (filter: filterType) => {
    if (videoElem && filter.title === 'default' && filter.filter) {
      videoElem.style['filter'] = filter.filter;
      setSelectedFilters([]);
      setStoredVideoFilters([]);
      setStoredFilterValues(defaultVideoValues);
      setFilterValues(defaultVideoValues);
    } else {
      const findIndex = selectedFilters.find((f) => f.title === filter.title);
      if (findIndex === undefined) {
        filter.isSelected = true;
        setSelectedFilters([...selectedFilters, filter]);
        setStoredVideoFilters([...selectedFilters, filter]);
      }
    }
  };

  // Remove the filter.
  const removeFilter = (filter: filterType) => {
    const selectedFilterRemove = selectedFilters.filter(
      (f) => f.title !== filter.title
    );
    filter.isSelected = false;
    setSelectedFilters(selectedFilterRemove);
    setStoredVideoFilters(selectedFilterRemove);
    applyFilter(selectedFilters, filterValues, videoElem);
  };

  // Apply filter whenever filter values changes.
  useEffect(() => {
    applyFilter(selectedFilters, filterValues, videoElem);
  }, [filterValues]);

  // On change filter values.
  const onChangeFilterValues: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filterName = e.target.name;
    const filter = filters.find((f) => f.title === filterName);
    if (filter) {
      if (filter.defaultValue + '' === e.target.value) {
        removeFilter(filter);
      } else setFilter(filter);
    }
    const newFilterValues = {
      ...filterValues,
      [e.target.name]: e.target.value + '',
    };
    setFilterValues(newFilterValues);
    setStoredFilterValues(newFilterValues);
    applyFilter(selectedFilters, filterValues, videoElem);
  };

  // Reset all filter values.
  const resetFilter = (filter: filterType) => {
    setFilterValues({
      ...filterValues,
      [filter.title]: filter.defaultValue + '',
    });
    removeFilter(filter);
    applyFilter(selectedFilters, filterValues, videoElem);
  };

  // Custom resize filter.
  const resizeFilter: filterType = {
    title: 'Resize',
    defaultValue: 100,
    min: 0,
    max: 100,
    step: 1,
  };

  // On screen change resize handler.
  const onChangeScreenSize: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setScreenSize(e.target.value);
    setStoredResizeValue(e.target.value);
    dispatch(sliceSetVideoSize(e.target.value));
  };

  // Update the canvas when the screenSize is changed.
  useEffect(() => {
    if (canvas) {
      canvas.style.cssText += `
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
        width: ${screenSize}%;
        height:${screenSize}%;
      `;
    }
  }, [screenSize]);

  const resetScreenSize = (value: string) => {
    setScreenSize(value);
    dispatch(sliceSetVideoSize(value));
    setStoredResizeValue(value);
  };

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
      <OptionGroup expandGroup={true}>
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
      <OptionGroup expandGroup={openFilterSection}>
        <div className="title">
          <div className="name">
            <div className="name-icon">
              <MdFilterAlt />
            </div>
            <label>Filters</label>
          </div>
          <div className="edge">
            <span className="checkBox">
              <input
                type="checkbox"
                id="tg"
                defaultChecked={openFilterSection}
                onChange={(e) => {
                  e.stopPropagation();
                  dispatch(sliceSetOpenFilterSection(e.target.checked));
                  if (!e.target.checked) {
                    setFilter(filters[0]);
                    resetScreenSize('100');
                  }
                }}
              />
              <label htmlFor="tg"></label>
            </span>
          </div>
        </div>
        <div className="options">
          <FilterView filter={resizeFilter.title} className="option">
            <div className="photo">
              <img src={thumbs ? thumbs : ''} alt={filters[0].title} />
            </div>
            <Slider
              key={resizeFilter.title}
              filter={resizeFilter}
              onChange={onChangeScreenSize}
              reset={(filter) => resetScreenSize(filter.defaultValue + '')}
              rangeValue={screenSize}
            />
          </FilterView>
          {filters.map(
            (filter, index) =>
              filter.title !== 'default' && (
                <FilterView
                  selected={
                    selectedFilters.find((f) => f.title === filter.title)
                      ? true
                      : false
                  }
                  className="option"
                  filter={filter.sampleFilter}
                  key={index}
                >
                  <div className="photo">
                    <img src={thumbs ? thumbs : ''} alt={filter.title} />
                  </div>
                  <Slider
                    key={filter.title}
                    filter={filter}
                    onChange={onChangeFilterValues}
                    reset={(filter) => resetFilter(filter)}
                    rangeValue={(filterValues as any)[filter.title]}
                  />
                </FilterView>
              )
          )}
        </div>
      </OptionGroup>
      <OptionGroup expandGroup={openBorderSection}>
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
