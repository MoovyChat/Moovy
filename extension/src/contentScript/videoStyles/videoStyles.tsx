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
  sliceSetAccentColor,
  sliceSetAutoSkip,
  sliceSetEnableBackground,
} from '../../redux/slices/misc/miscSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import Slider from '../../components/slider/slider';
import { defaultVideoValues } from '../../Utils/defaultValues';
import { getVideoElement } from '../contentScript.utils';
import { sliceSetVideoSize } from '../../redux/slices/settings/settingsSlice';

const VideoStyles = () => {
  const dispatch = useAppDispatch();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const autoSkipRef = useRef<HTMLDivElement | null>(null);
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const knobColor = useAppSelector((state) => state.misc.accentColor);
  const autoSkip = useAppSelector((state) => state.misc.autoSkip);
  const autoNextEpisode = useAppSelector((state) => state.misc.autoNextEpisode);
  const nodes = useAppSelector((state) => state.audioNodes);
  const [canvas, setCanvas] = useState<HTMLElement>();
  const enableBackground = useAppSelector(
    (state) => state.misc.enableBackground
  );
  const [isNodesValid, setIsNodesValid] = useState<boolean>(false);
  const manipulation = useAppSelector((state) => state.manipulation);
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);
  const [screenSize, setScreenSize] = useState<string>('100');
  const thumbs = useAppSelector((state) => state.movie.thumbs);
  const [openFilterSection, setOpenFilterSection] = useState<boolean>(false);
  const [openBorderSection, setOpenBorderSection] = useState<boolean>(false);
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

  /**
   useEffect(() => {
    const {
      stereo,
      gain,
      analyser,
      audioContext,
      audioSource,
      biQuadFilter,
      distortion,
    } = nodes;
    if (
      !stereo ||
      !gain ||
      !analyser ||
      !audioContext ||
      !audioSource ||
      !biQuadFilter ||
      !distortion
    ) {
      setIsNodesValid(() => false);
    } else setIsNodesValid(() => true);
  }, [nodes]);
  */

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
      if (filterVal) setFilterValues(filterVal);
    });
  }, []);

  // Grab the video player when the component is initiated.
  useEffect(() => {
    getVideoElement().then((res) => {
      setVideoElem(res[0]);
    });
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

  // let distortionFilter: filterType = {
  //   title: 'Distortion',
  //   defaultValue: 0,
  //   min: 0,
  //   max: 99,
  //   step: 1,
  // };

  // let playbackFilter: filterType = {
  //   title: 'Playback speed',
  //   defaultValue: 1,
  //   min: 1,
  //   max: 15,
  //   step: 1,
  // };

  // let QValueFilter: filterType = {
  //   title: 'Quality Factor',
  //   defaultValue: 0,
  //   min: 0,
  //   max: 100,
  //   step: 2,
  // };

  // let StereoFilter: filterType = {
  //   title: 'Stereo',
  //   defaultValue: 0,
  //   min: -1,
  //   max: 1,
  //   step: 1,
  // };

  // let AudioFrequency: filterType = {
  //   title: 'Audio Frequency',
  //   defaultValue: 24000,
  //   min: 0,
  //   max: 24000,
  //   step: 1000,
  // };

  // let AudioGain: filterType = {
  //   title: 'Amplify Volume',
  //   defaultValue: 3,
  //   min: 0.1,
  //   max: 10,
  //   step: 0.1,
  // };

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

  const debouncedUpdateColor = debounce((dispatch, color) => {
    dispatch(sliceSetAccentColor(color));
  }, 400);

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

  const setPresetFilter = (filter: filterType) => {
    // Reset filter values.
    setFilterValues({
      blur: '0',
      contrast: '1',
      brightness: '1',
      grayscale: '0',
      invert: '0',
      sepia: '0',
      saturate: '100',
      hue: '0',
    });
    setSelectedFilters(() => []);
    const filterValue = filter.sampleFilter!;
    const filtersArray = filterValue.split(' ');
    let regex = /([a-z-]+)\(([0-9]+(?:\.[0-9]+)?)(deg|%)?\)/;
    filtersArray.map((value) => {
      let match = value.match(regex);
      if (!match) return null;
      let filterName = match[1];
      let filterValue: any = null;
      if (filterName === 'hue-rotate') filterName = 'hue';
      if (filterName === 'sepia' || filterName === 'saturate') {
        filterValue = match[2];
      } else if (filterName === 'hue') {
        filterValue = parseFloat(match[2]);
      } else filterValue = parseFloat(match[2]) / 100;
      setFilterValues((filter) => {
        let newObj = {
          ...filter,
          [filterName]: '' + filterValue,
        };
        return newObj;
      });
      setSelectedFilters((selected) => [...selected, { title: filterName }]);
      setStoredFilterValues(filterValues);
      applyFilter(selectedFilters, filterValues, videoElem);
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
        <div className='options' ref={autoSkipRef}>
          <div className='tool-option'>
            <span className='option-text'>Accent Color</span>
            <span className='option-choice'>
              <CustomBorder
                style={{ backgroundColor: knobColor }}
                className='accent'>
                <input
                  type='color'
                  id='color-picker'
                  name='color-picker'
                  onChange={(e) => {
                    e.stopPropagation();
                    debouncedUpdateColor(dispatch, e.target.value);
                  }}
                />
                <div className='icon' />
              </CustomBorder>
            </span>
          </div>
          <div className='tool-option'>
            <span className='option-text'>Auto Skip</span>
            <span className='checkBox'>
              <input
                type='checkbox'
                id='autoSk'
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
              <label htmlFor='autoSk'></label>
            </span>
          </div>
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
        </div>
      </OptionGroup>
      {/* <OptionGroup expandGroup={true} isNodesValid={isNodesValid}>
        <div className='title'>
          <div className='name'>
            <div className='name-icon'>
              <MdAudiotrack />
            </div>
            <label>Audio/Video Settings</label>
            <div className='nodes-status'>
              {isNodesValid ? 'CONNECTED' : 'NOT CONNECTED'}
            </div>
          </div>
        </div>
        <AudioVisualizer fftSize={256} canvasRef={canvasRef} />
        <div className='options'>
          <FilterView filter={playbackFilter.title} className='option'>
            <div className='show-val'>{manipulation.playbackRate}x</div>
            <Slider
              key={playbackFilter.title}
              filter={playbackFilter}
              onChange={(e) => {
                e.stopPropagation();
                dispatch(
                  sliceSetManipulation({
                    key: 'playbackRate',
                    value: parseInt(e.target.value),
                  })
                );
              }}
              reset={(filter) => {
                dispatch(
                  sliceSetManipulation({
                    key: 'playbackRate',
                    value: 1,
                  })
                );
              }}
              rangeValue={manipulation.playbackRate + ''}
            />
          </FilterView>
          <FilterView filter='Audio filter type' className='option'>
            <div className='show-val'>{manipulation.filterType}</div>
            <SelectDropDown
              reset={() => {
                dispatch(
                  sliceSetManipulation({ key: 'filterType', value: 'none' })
                );
              }}
              value={manipulation.filterType}
              setValue={(value: BiquadFilterType) =>
                dispatch(
                  sliceSetManipulation({ key: 'filterType', value: value })
                )
              }
              title='Audio filter type'
              options={
                [
                  'lowpass',
                  'highpass',
                  'bandpass',
                  'lowshelf',
                  'highshelf',
                  'peaking',
                  'notch',
                  'allpass',
                ] as BiquadFilterType[]
              }
            />
          </FilterView>
          <FilterView filter={QValueFilter.title} className='option'>
            <div className='show-val'>{manipulation.QValue}</div>
            <Slider
              key={QValueFilter.title}
              filter={QValueFilter}
              onChange={(e) => {
                e.stopPropagation();
                dispatch(
                  sliceSetManipulation({
                    key: 'QValue',
                    value: parseInt(e.target.value),
                  })
                );
              }}
              reset={(filter) => {
                dispatch(
                  sliceSetManipulation({
                    key: 'QValue',
                    value: 0,
                  })
                );
              }}
              rangeValue={manipulation.QValue + ''}
            />
          </FilterView>
          <FilterView filter={AudioFrequency.title} className='option'>
            <div className='show-val'>{manipulation.frequency}</div>
            <Slider
              key={AudioFrequency.title}
              filter={AudioFrequency}
              onChange={(e) => {
                e.stopPropagation();
                dispatch(
                  sliceSetManipulation({
                    key: 'frequency',
                    value: parseInt(e.target.value),
                  })
                );
              }}
              reset={(filter) => {
                dispatch(
                  sliceSetManipulation({
                    key: 'frequency',
                    value: 24000,
                  })
                );
              }}
              rangeValue={manipulation.frequency + ''}
            />
          </FilterView>
          <FilterView filter={AudioGain.title} className='option'>
            <div className='show-val'>{manipulation.gain}</div>
            <Slider
              key={AudioGain.title}
              filter={AudioGain}
              onChange={(e) => {
                e.stopPropagation();
                dispatch(
                  sliceSetManipulation({
                    key: 'gain',
                    value: parseInt(e.target.value),
                  })
                );
              }}
              reset={() => {
                dispatch(
                  sliceSetManipulation({
                    key: 'gain',
                    value: 3,
                  })
                );
              }}
              rangeValue={manipulation.gain + ''}
            />
          </FilterView>
          <FilterView filter={StereoFilter.title} className='option'>
            <div className='show-val'>{manipulation.stereo}</div>
            <Slider
              key={StereoFilter.title}
              filter={StereoFilter}
              onChange={(e) => {
                e.stopPropagation();
                dispatch(
                  sliceSetManipulation({
                    key: 'stereo',
                    value: parseInt(e.target.value),
                  })
                );
              }}
              reset={() => {
                dispatch(
                  sliceSetManipulation({
                    key: 'stereo',
                    value: 0,
                  })
                );
              }}
              rangeValue={manipulation.stereo + ''}
            />
          </FilterView>
          <FilterView filter={distortionFilter.title} className='option'>
            <div className='show-val'>{manipulation.distortionCurve}</div>
            <Slider
              key={distortionFilter.title}
              filter={distortionFilter}
              onChange={(e) => {
                e.stopPropagation();
                dispatch(
                  sliceSetManipulation({
                    key: 'distortionCurve',
                    value: parseInt(e.target.value),
                  })
                );
              }}
              reset={() => {
                dispatch(
                  sliceSetManipulation({
                    key: 'distortionCurve',
                    value: 0,
                  })
                );
              }}
              rangeValue={manipulation.distortionCurve + ''}
            />
          </FilterView>
          <FilterView filter='Distortion Oversample' className='option'>
            <div className='show-val'>{manipulation.distortionOverSample}</div>
            <SelectDropDown
              reset={() => {
                dispatch(
                  sliceSetManipulation({
                    key: 'distortionOverSample',
                    value: 'none',
                  })
                );
              }}
              value={manipulation.distortionOverSample}
              setValue={(value: BiquadFilterType) =>
                dispatch(
                  sliceSetManipulation({
                    key: 'distortionOverSample',
                    value: value,
                  })
                )
              }
              title='Distortion Oversample'
              options={['2x ', '4x', '8x'] as OverSampleType[]}
            />
          </FilterView>
        </div>
      </OptionGroup> */}
      <OptionGroup expandGroup={openFilterSection}>
        <div className='title'>
          <div className='name'>
            <div className='name-icon'>
              <MdFilterAlt />
            </div>
            <label>Filters</label>
          </div>
          <div className='edge'>
            <span className='checkBox'>
              <input
                type='checkbox'
                id='tg'
                defaultChecked={openFilterSection}
                onChange={(e) => {
                  e.stopPropagation();
                  setStoredIsFilterOpen(e.target.checked);
                  setOpenFilterSection(e.target.checked);
                  if (!e.target.checked) {
                    setFilter(filters[0]);
                    resetScreenSize('100');
                  }
                }}
              />
              <label htmlFor='tg'></label>
            </span>
          </div>
        </div>
        <div className='options'>
          <FilterView filter={resizeFilter.title} className='option'>
            <div className='photo'>
              <img src={thumbs!} alt={filters[0].title} />
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
                    <img src={thumbs!} alt={filter.title} />
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
      {/* <OptionGroup expandGroup={openFilterSection}>
        <div className='title'>
          <div className='name'>
            <div className='name-icon'>
              <MdFilterAlt />
            </div>
            <label>Preset Filters</label>
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
        <div className='presets'>
          {presetFilters.map((filter, index) => (
            <PresetFilter
              selected={
                selectedFilters.find((f) => f.title === filter.title)
                  ? true
                  : false
              }
              onClick={(e) => {
                e.stopPropagation();
                setPresetFilter(filter);
              }}
              className='option'
              filter={filter.sampleFilter}
              key={index}>
              <div className='photo'>
                <img src={thumbs!} alt={filter.title} />
              </div>
              <div>{filter.title}</div>
            </PresetFilter>
          ))}
        </div>
      </OptionGroup> */}
      <OptionGroup expandGroup={openBorderSection}>
        <div className='title'>
          <div className='name'>
            <div className='name-icon'>
              <MdOutlineWbIridescent />
            </div>
            <label>Ambience</label>
          </div>
          <div className='edge'>
            <span className='checkBox'>
              <input
                type='checkbox'
                id='bd'
                defaultChecked={openBorderSection}
                onChange={(e) => {
                  e.stopPropagation();
                  setStoredIsBorderOpen(e.target.checked);
                  setOpenBorderSection(e.target.checked);
                  if (!e.target.checked) {
                    addBorder(canvas, screenSize, borders[0]);
                  }
                }}
              />
              <label htmlFor='bd'></label>
            </span>
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
