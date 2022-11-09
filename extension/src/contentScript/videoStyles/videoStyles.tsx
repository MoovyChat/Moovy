import {
  BoxShadows,
  CustomBorder,
  FilterView,
  OptionGroup,
  Section,
  VideoParent,
} from './videoStyles.styles';
import {
  MdCancel,
  MdFilterAlt,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { addBorder, applyFilter } from './videoStyles.help';
import {
  borderType,
  filterType,
  videoFilterSettings,
} from '../../Utils/interfaces';
import {
  getStoredFilterValues,
  getStoredIsFilterOpen,
  getStoredResizeValue,
  getStoredVideoFilters,
  setStoredFilterValues,
  setStoredIsFilterOpen,
  setStoredResizeValue,
  setStoredVideoFilters,
} from '../../Utils/storage';

import { AiFillCloseCircle } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';
import Slider from '../../components/slider/slider';
import _ from 'lodash';
import { defaultVideoValues } from '../../Utils/defaultValues';
import { getVideoElement } from '../contentScript.utils';
import { sliceSetVideoSize } from '../../redux/slices/settings/settingsSlice';
import { useAppDispatch } from '../../redux/hooks';

const VideoStyles = () => {
  const dispatch = useAppDispatch();
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const [canvas, setCanvas] = useState<HTMLElement>();
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);
  const [screenSize, setScreenSize] = useState<string>('100');
  const [openFilterSection, setOpenFilterSection] = useState<boolean>(false);
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
  const samplePhotoUrl =
    'https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/qc.png?alt=media&token=f1b435bb-446b-4ea9-8c3c-9084a35397e1';
  const filters: filterType[] = [
    {
      title: 'default',
      filter: 'none',
      isSelected: true,
      url: samplePhotoUrl,
    },
    {
      title: 'grayscale',
      min: 0,
      max: 2,
      step: 0.05,
      defaultValue: 0,
      sampleFilter: 'grayScale(2)',
      isSelected: false,
      url: samplePhotoUrl,
    },
    {
      title: 'contrast',
      min: 0.5,
      max: 2,
      step: 0.07,
      defaultValue: 1,
      sampleFilter: 'contrast(1.75)',
      isSelected: false,
      url: samplePhotoUrl,
    },
    {
      title: 'blur',
      min: 0,
      max: 40,
      step: 0.5,
      sampleFilter: 'blur(6px)',
      defaultValue: 0,
      isSelected: false,
      url: samplePhotoUrl,
    },
    {
      title: 'brightness',
      min: 0.5,
      max: 2,
      step: 0.05,
      defaultValue: 1,
      sampleFilter: 'brightness(1.75)',
      isSelected: false,
      url: samplePhotoUrl,
    },
    {
      title: 'invert',
      min: 0,
      max: 1,
      step: 0.1,
      defaultValue: 0,
      sampleFilter: 'invert(1)',
      isSelected: false,
      url: samplePhotoUrl,
    },
    {
      title: 'sepia',
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 0,
      sampleFilter: 'sepia(60)',
      isSelected: false,
      url: samplePhotoUrl,
    },
    {
      title: 'saturate',
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 100,
      sampleFilter: 'saturate(50)',
      isSelected: false,
      url: samplePhotoUrl,
    },
    {
      title: 'hue',
      min: 0,
      max: 1,
      step: 0.01,
      defaultValue: 0,
      sampleFilter: 'hue-rotate(0.5turn)',
      isSelected: false,
      url: samplePhotoUrl,
    },
  ];

  const borders: borderType[] = [
    {
      title: 'default',
      color: 'none',
    },
    {
      title: 'white',
      color: 'white',
    },
    {
      title: 'red',
      color: 'red',
    },
    {
      title: 'blue',
      color: 'blue',
    },
    {
      title: 'green',
      color: 'green',
    },
    {
      title: 'sky',
      color: '#00efff',
    },
  ];

  useEffect(() => {
    // Get stored is Filter open boolean value.
    getStoredIsFilterOpen().then((res) => setOpenFilterSection(res));

    // Get selected filters from the local storage.
    getStoredVideoFilters().then((filters) => setSelectedFilters(filters));

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

  // Apply the filters.
  // const applyFilter = () => {
  //   let filterText = selectedFilters
  //     .map((f) => {
  //       switch (f.title) {
  //         case 'grayscale':
  //         case 'contrast':
  //         case 'brightness':
  //         case 'invert':
  //           return `${f.title}(${filterValues[f.title]})`;
  //         case 'blur':
  //           return `${f.title}(${filterValues[f.title]}px)`;
  //         case 'sepia':
  //         case 'saturate':
  //           return `${f.title}(${filterValues[f.title]}%)`;
  //         case 'hue':
  //           return `hue-rotate(${filterValues.hue}turn)`;
  //         default:
  //           break;
  //       }
  //     })
  //     .join(' ');
  //   setStoredFilterValues(filterValues);
  //   if (videoElem) videoElem.style['filter'] = filterText;
  // };

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

  let resetScreenSize = (filter: filterType) => {
    setScreenSize(filter.defaultValue + '');
    dispatch(sliceSetVideoSize(filter.defaultValue));
  };
  return (
    <VideoParent>
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
              reset={(filter) => resetScreenSize(filter)}
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
      <Section className='options'>
        <div className='title'>Ambience</div>
        <div className='borders'>
          {borders.map((border) => {
            if (border.title === 'default') {
              <MdCancel
                size={20}
                onClick={() => {
                  addBorder(canvas, screenSize, border);
                }}
              />;
            } else
              return (
                <BoxShadows
                  color={border.color}
                  key={border.title}
                  onClick={() => {
                    addBorder(canvas, screenSize, border);
                  }}
                />
              );
          })}
          <CustomBorder>
            <input
              type='color'
              id='color-picker'
              name='color-picker'
              onChange={(e) => {
                e.stopPropagation();
                let border: borderType = {
                  title: 'custom',
                  color: e.target.value,
                };
                addBorder(canvas, screenSize, border);
              }}
            />
          </CustomBorder>
        </div>
      </Section>
    </VideoParent>
  );
};

export default VideoStyles;
