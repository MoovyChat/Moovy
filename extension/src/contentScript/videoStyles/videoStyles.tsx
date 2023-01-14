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
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  MdAdd,
  MdBuild,
  MdFiberManualRecord,
  MdFilterAlt,
  MdOutlineWbIridescent,
} from 'react-icons/md';
import { addBorder, applyFilter, borders, filters } from './videoStyles.help';
import {
  borderType,
  filterType,
  videoFilterSettings,
} from '../../Utils/interfaces';
import {
  getStoredCustomBorders,
  getStoredFilterValues,
  getStoredIsBorderOpen,
  getStoredIsFilterOpen,
  getStoredResizeValue,
  getStoredVideoFilters,
  setStoredCustomBorder,
  setStoredFilterValues,
  setStoredIsBorderOpen,
  setStoredIsFilterOpen,
  setStoredResizeValue,
  setStoredVideoFilters,
} from '../../Utils/storage';
import {
  sliceSetEnableBackground,
  sliceSetKnobColor,
} from '../../redux/slices/misc/miscSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import Slider from '../../components/slider/slider';
import _ from 'lodash';
import { defaultVideoValues } from '../../Utils/defaultValues';
import { getStreamForWindow } from './mediaRecorder';
import { getVideoElement } from '../contentScript.utils';
import { sliceSetVideoSize } from '../../redux/slices/settings/settingsSlice';
import { title } from 'process';

const VideoStyles = () => {
  const dispatch = useAppDispatch();
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const knobColor = useAppSelector((state) => state.misc.knobColor);
  const [canvas, setCanvas] = useState<HTMLElement>();
  const enableBackground = useAppSelector(
    (state) => state.misc.enableBackground
  );
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);
  const [screenSize, setScreenSize] = useState<string>('100');
  const [openFilterSection, setOpenFilterSection] = useState<boolean>(false);
  const [openBorderSection, setOpenBorderSection] = useState<boolean>(false);
  const [customBorders, setCustomBorders] = useState<borderType[]>([]);
  const [filterValues, setFilterValues] = useState<any>({
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
    // Get stored is Filter open boolean value.
    getStoredIsFilterOpen().then((res) => setOpenFilterSection(res));

    // Get stored is border open boolean value.
    getStoredIsBorderOpen().then((res) => setOpenBorderSection(res));

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
      console.log({ filterValues, filterVal });
      if (filterVal) setFilterValues(filterVal);
    });
  }, []);

  // Grab the video player when the component is initiated.
  useEffect(() => {
    getVideoElement().then((res) => {
      setVideoElem(res[0]);
    });
    // let playerViewCollection = document.getElementsByClassName('ltr-omkt8s');
    let playerView = document.querySelector('[data-uia="player"]');
    setCanvas(playerView as HTMLElement);
  }, []);

  // Set the filter to the video.
  const setFilter = (filter: filterType) => {
    if (videoElem && filter.title === 'default') {
      videoElem.style['filter'] = filter.filter!;
      setSelectedFilters([]);
      setStoredVideoFilters([]);
      setStoredFilterValues(defaultVideoValues);
      setFilterValues(defaultVideoValues);
    } else {
      let findIndex = selectedFilters.find((f) => f.title === filter.title);
      if (findIndex === undefined) {
        filter.isSelected = true;
        setSelectedFilters([...selectedFilters, filter]);
        setStoredVideoFilters([...selectedFilters, filter]);
        console.log(selectedFilters);
      }
    }
  };

  // Remove the filter.
  const removeFilter = (filter: filterType) => {
    let selectedFilterRemove = selectedFilters.filter(
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
    let filterName = e.target.name;
    let filter = filters.find((f) => f.title === filterName);
    if (filter) {
      if (filter.defaultValue + '' === e.target.value) {
        removeFilter(filter);
      } else setFilter(filter);
    }
    let newFilterValues = {
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
  let resizeFilter: filterType = {
    title: 'Resize',
    defaultValue: 100,
    min: 0,
    max: 100,
    step: 1,
  };

  // On screen change resize handler.
  let onChangeScreenSize: ChangeEventHandler<HTMLInputElement> = (e) => {
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

  let resetScreenSize = (value: string) => {
    setScreenSize(value);
    dispatch(sliceSetVideoSize(value));
    setStoredResizeValue(value);
  };

  const onColorBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    let border: borderType = {
      color: e.target.value,
      title: e.target.value,
    };
    setStoredCustomBorder(border);
    setCustomBorders((current) => {
      let newBorders = [border, ...current];
      let uniqBorders = _.uniqBy(newBorders, 'color');
      if (uniqBorders.length > 10) uniqBorders.pop();
      return uniqBorders;
    });
  };

  return (
    <VideoParent>
      <OptionGroup expandGroup={true}>
        <div className='title'>
          <div className='name'>
            <div className='name-icon'>
              <MdBuild />
            </div>
            <label>Tools</label>
          </div>
        </div>
        <div className='options'>
          <div className='tool-option'>
            <span className='option-text'>Enable background</span>
            <span className='checkBox'>
              <input
                type='checkbox'
                id='bg'
                defaultChecked={enableBackground}
                onChange={(e) => {
                  e.stopPropagation();
                  dispatch(
                    sliceSetEnableBackground(e.target.checked as boolean)
                  );
                }}
              />
              <label htmlFor='bg'></label>
            </span>
          </div>
          <div className='tool-option'>
            <span className='option-text'>Knob Color</span>
            <span className='option-choice'>
              <CustomBorder style={{ backgroundColor: knobColor }}>
                <input
                  type='color'
                  id='color-picker'
                  name='color-picker'
                  onChange={(e) => {
                    e.stopPropagation();
                    dispatch(sliceSetKnobColor(e.target.value));
                  }}
                />
                <div className='icon' />
              </CustomBorder>
            </span>
          </div>
        </div>
      </OptionGroup>
      <OptionGroup expandGroup={openFilterSection}>
        <div className='title'>
          <div className='name'>
            <div className='name-icon'>
              <MdFilterAlt />
            </div>
            <label>Filters</label>
          </div>
          <div className='edge'>
            <div className='checkBox'>
              <input
                type='checkbox'
                id='toggle'
                checked={openFilterSection}
                onChange={(e) => {
                  e.stopPropagation();
                  if (e.target.checked) {
                    setStoredIsFilterOpen(true);
                    setOpenFilterSection(true);
                  } else {
                    setFilter(filters[0]);
                    setOpenFilterSection(false);
                    setStoredIsFilterOpen(false);
                    resetScreenSize('100');
                  }
                }}
              />
              <label htmlFor='toggle'></label>
            </div>
          </div>
        </div>
        <div className='options'>
          <FilterView filter={resizeFilter.title} className='option'>
            <div className='photo'>
              <img src={filters[0].url} alt={filters[0].title} />
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
                  className='option'
                  filter={filter.sampleFilter}
                  key={index}>
                  <div className='photo'>
                    <img src={filter.url} alt={filter.title} />
                  </div>
                  <Slider
                    key={filter.title}
                    filter={filter}
                    onChange={onChangeFilterValues}
                    reset={(filter) => resetFilter(filter)}
                    rangeValue={filterValues[filter.title]}
                  />
                </FilterView>
              )
          )}
        </div>
      </OptionGroup>
      <OptionGroup expandGroup={openBorderSection}>
        <div className='title'>
          <div className='name'>
            <div className='name-icon'>
              <MdOutlineWbIridescent />
            </div>
            <label>Ambience</label>
          </div>
          <div className='edge'>
            <div className='checkBox'>
              <input
                type='checkbox'
                id='toggle-border'
                checked={openBorderSection}
                onChange={(e) => {
                  e.stopPropagation();
                  if (e.target.checked) {
                    setStoredIsBorderOpen(true);
                    setOpenBorderSection(true);
                  } else {
                    addBorder(canvas, screenSize, borders[0]);
                    setStoredIsBorderOpen(false);
                    setOpenBorderSection(false);
                  }
                }}
              />
              <label htmlFor='toggle-border'></label>
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='ready'>
            <label>Available</label>
            <div className='border-list'>
              {borders.map((border) => {
                return (
                  border.title !== 'default' && (
                    <BoxShadows
                      className='option'
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
          <div className='ready'>
            <label>Custom</label>
            <div className='border-list'>
              <div className='custom-option'>
                <CustomBorder>
                  <input
                    type='color'
                    id='color-picker'
                    name='color-picker'
                    onBlur={onColorBlurHandler}
                    onChange={(e) => {
                      e.stopPropagation();
                      let border: borderType = {
                        title: 'custom',
                        color: e.target.value,
                      };
                      addBorder(canvas, screenSize, border);
                    }}
                  />
                  <MdAdd size={20} className='icon' />
                </CustomBorder>
              </div>
              {customBorders.map((border) => {
                return (
                  border.title !== 'default' && (
                    <div className='custom-option'>
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
