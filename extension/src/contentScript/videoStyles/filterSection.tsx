import { FilterView, OptionGroup, PresetFilter } from './videoStyles.styles';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { applyFilter, filters, presetFilters } from './videoStyles.help';
import { filterType, videoFilterSettings } from '../../Utils/interfaces';
import {
  getStoredFilterValues,
  getStoredVideoFilters,
  setStoredFilterValues,
  setStoredResizeValue,
  setStoredVideoFilters,
} from '../../Utils/storage';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { MdFilterAlt } from 'react-icons/md';
import Slider from '../../components/slider/slider';
import { defaultVideoValues } from '../../Utils/defaultValues';
import { sliceSetOpenFilterSection } from '../../redux/slices/misc/miscSlice';
import { sliceSetVideoSize } from '../../redux/slices/settings/settingsSlice';

interface Props {
  videoElem: HTMLVideoElement | undefined;
  canvas: HTMLElement | undefined;
}
const FilterSection: React.FC<Props> = ({ videoElem, canvas }) => {
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);
  const dispatch = useAppDispatch();
  const openFilterSection = useAppSelector(
    (state) => state.misc.openFilterSection
  );
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const [selectedPresetFilter, setSelectedPreset] = useState<string>('');
  const [screenSize, setScreenSize] = useState<string>('100');
  const thumbs = useAppSelector((state) => state.movie.thumbs);
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

    // Set filter values from storage
    getStoredFilterValues().then((filterVal: videoFilterSettings) => {
      if (filterVal) setFilterValues(filterVal);
    });
  }, []);
  // Custom resize filter.
  const resizeFilter: filterType = {
    title: 'Resize',
    defaultValue: 100,
    min: 0,
    max: 100,
    step: 1,
  };

  // Apply filter whenever filter values changes.
  useEffect(() => {
    applyFilter(selectedFilters, filterValues, videoElem);
  }, [filterValues]);

  // Update the canvas when the screenSize is changed.
  useEffect(() => {
    if (canvas) {
      canvas.style.cssText += `
        margin: auto;
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

  // On screen change resize handler.
  const onChangeScreenSize: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setScreenSize(e.target.value);
    setStoredResizeValue(e.target.value);
    dispatch(sliceSetVideoSize(e.target.value));
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
    setSelectedPreset(() => filter.title);
    const filterValue = filter.sampleFilter!;
    const filtersArray = filterValue.split(' ');
    const regex = /([a-z-]+)\(([0-9]+(?:\.[0-9]+)?)(deg|%)?\)/;
    filtersArray.map((value) => {
      const match = value.match(regex);
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
        const newObj = {
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

  return (
    <React.Fragment>
      <OptionGroup expandGroup={openFilterSection} color={accentColor}>
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
                    setSelectedPreset('');
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
      <OptionGroup expandGroup={openFilterSection} color={accentColor}>
        <div className="title">
          <div className="name">
            <div className="name-icon">
              <MdFilterAlt />
            </div>
            <label>Preset Filters</label>
          </div>
        </div>
        {openFilterSection && (
          <div className="presets">
            {presetFilters.map((filter, index) => (
              <PresetFilter
                selectedPreset={selectedPresetFilter === filter.title}
                accentColor={accentColor}
                onClick={(e) => {
                  e.stopPropagation();
                  setPresetFilter(filter);
                }}
                className="option"
                filter={filter.sampleFilter}
                key={index}
              >
                <div className="photo">
                  <img src={thumbs!} alt={filter.title} />
                </div>
                <div>{filter.title}</div>
              </PresetFilter>
            ))}
          </div>
        )}
      </OptionGroup>
    </React.Fragment>
  );
};

export default FilterSection;
