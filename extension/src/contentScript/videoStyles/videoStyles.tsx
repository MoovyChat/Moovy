import {
  BoxShadows,
  CustomBorder,
  FilterView,
  Section,
  VideoParent,
} from './videoStyles.styles';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { borderType, filterType } from '../../Utils/interfaces';
import {
  getStoredFilterValues,
  getStoredVideoFilters,
  setStoredFilterValues,
  setStoredVideoFilters,
} from '../../Utils/storage';

import { AiFillCloseCircle } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import Slider from '../../components/slider/slider';
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
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/TomandJerryTitleCardc.jpg/220px-TomandJerryTitleCardc.jpg';
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
    // Get selected filters from the local storage.
    getStoredVideoFilters().then((filters) => setSelectedFilters(filters));

    // Set filter values from storage
    getStoredFilterValues().then((filterVal) => {
      if (filterVal) setFilterValues(filterVal);
    });
  });

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
    setSelectedFilters(selectedFilterRemove);
    setStoredVideoFilters(selectedFilterRemove);
    applyFilter();
  };

  // Add the border to the video parent.
  const addBorder = (border: borderType) => {
    if (!canvas) return;

    if (border.title === 'default') {
      canvas.style.cssText = `
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width:${parseInt(screenSize) + 2}%;
        height:${parseInt(screenSize) + 2}%;
        overflow: hidden;
      `;
    } else {
      canvas.style.cssText += `
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width:${parseInt(screenSize) - 2}%;
        height:${parseInt(screenSize) - 2}%;
        overflow: hidden;
        box-shadow: 0px 0px 25px ${border.color};
      `;
    }
  };

  // Apply filter whenever filter values changes.
  useEffect(() => {
    applyFilter();
  }, [filterValues]);

  // Apply the filters.
  const applyFilter = () => {
    let filterText = selectedFilters
      .map((f) => {
        switch (f.title) {
          case 'grayscale':
          case 'contrast':
          case 'brightness':
          case 'invert':
            return `${f.title}(${filterValues[f.title]})`;
          case 'blur':
            return `${f.title}(${filterValues[f.title]}px)`;
          case 'sepia':
          case 'saturate':
            return `${f.title}(${filterValues[f.title]}%)`;
          case 'hue':
            return `hue-rotate(${filterValues.hue}turn)`;
          default:
            break;
        }
      })
      .join(' ');
    setStoredFilterValues(filterValues);
    if (videoElem) videoElem.style['filter'] = filterText;
  };

  // On change filter values.
  const onChangeFilterValues: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value + '' });
    applyFilter();
  };

  // Reset all filter values.
  const resetFilter = (filter: filterType) => {
    setFilterValues({
      ...filterValues,
      [filter.title]: filter.defaultValue + '',
    });
    applyFilter();
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
    dispatch(sliceSetVideoSize(e.target.value));
  };

  // Update the canvas when the screenSize is changed.
  useEffect(() => {
    let videoElements = document.getElementsByTagName('video');
    if (videoElements.length > 0) {
      let videoElem = videoElements[0];
      // if (videoElem)
      //   videoElem.style.cssText = `
      //   height: 100%;
      //   width: 100%;
      // `;
    }
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
      <Section className='sliders'>
        <div className='title'>Controls</div>
        <Slider
          key={resizeFilter.title}
          filter={resizeFilter}
          onChange={onChangeScreenSize}
          reset={(filter) => resetScreenSize(filter)}
          rangeValue={screenSize}
        />
        {selectedFilters.map((filter) => {
          return (
            <Slider
              key={filter.title}
              filter={filter}
              onChange={onChangeFilterValues}
              reset={(filter) => resetFilter(filter)}
              rangeValue={filterValues[filter.title]}
            />
          );
        })}
      </Section>
      <Section className='options'>
        <div className='title'>Filters</div>
        <div className='filters'>
          {filters.map((filter, index) => (
            <FilterView
              filter={filter.sampleFilter}
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setFilter(filter);
              }}>
              <div className='photo'>
                <img src={filter.url} alt={filter.title} />
                {selectedFilters.find((f) => f.title === filter.title) ? (
                  <div
                    className='layover'
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFilter(filter);
                    }}>
                    <GiCheckMark size={30} />
                  </div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </div>
              <div className='title'>{filter.title}</div>
            </FilterView>
          ))}
        </div>
      </Section>
      <Section className='options'>
        <div className='title'>Ambience</div>
        <div className='borders'>
          {borders.map((border) => {
            if (border.title === 'default') {
              <MdCancel
                size={20}
                onClick={() => {
                  addBorder(border);
                }}
              />;
            } else
              return (
                <BoxShadows
                  color={border.color}
                  key={border.title}
                  onClick={() => {
                    addBorder(border);
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
                addBorder(border);
              }}
            />
          </CustomBorder>
        </div>
      </Section>
    </VideoParent>
  );
};

export default VideoStyles;
