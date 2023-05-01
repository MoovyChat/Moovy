import React, { ChangeEventHandler, useEffect, useState } from "react";
import { applyFilter, filters, presetFilters } from "./videoStyles.help";
import { FilterView, OptionGroup, PresetFilter } from "./videoStyles.styles";

import { MdFilterAlt } from "react-icons/md";
import Slider from "../../../../../components/slider/slider";
import { defaultVideoValues } from "../../../../../helpers/defaultValues";
import {
  filterType,
  videoFilterSettings,
} from "../../../../../helpers/interfaces";
import {
  getStoredFilterValues,
  getStoredVideoFilters,
  setStoredFilterValues,
  setStoredResizeValue,
  setStoredVideoFilters,
} from "../../../../../helpers/storage";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  sliceSetOpenFilterSection,
  sliceSetPresetFilter,
} from "../../../../redux/slices/misc/miscSlice";
import { sliceSetVideoSize } from "../../../../redux/slices/settings/settingsSlice";
import { getPositiveHueValue } from "../../../../../helpers/utilities";

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
  const [selectedPresetFilter, setSelectedPreset] = useState<string>("");
  const presetFromRedux = useAppSelector((state) => state.misc.presetFilter);
  const [screenSize, setScreenSize] = useState<string>("100");
  const thumbs = useAppSelector((state) => state.movie.thumbs);
  const [filterValues, setFilterValues] = useState<videoFilterSettings>({
    blur: "0",
    contrast: "1",
    brightness: "1",
    grayscale: "0",
    invert: "0",
    sepia: "0",
    saturate: "100",
    hue: "0",
  });

  useEffect(() => {
    // Get selected filters from the local storage.
    getStoredVideoFilters().then((filters) => {
      if (filters) setSelectedFilters(filters);
    });

    // Set filter values from storage
    getStoredFilterValues().then((filterVal: videoFilterSettings) => {
      if (filterVal) setFilterValues(filterVal);
    });
  }, []);
  // Custom resize filter.
  const resizeFilter: filterType = {
    title: "Resize",
    defaultValue: 100,
    min: 0,
    max: 100,
    step: 1,
  };

  // Apply filter whenever filter values changes.
  useEffect(() => {
    filterValues && applyFilter(filterValues, videoElem);
  }, [filterValues, selectedFilters]);

  // Update the canvas when the screenSize is changed.
  useEffect(() => {
    if (canvas) {
      canvas.style.cssText += `
        margin: auto;
        width: ${screenSize}%;
        height:${screenSize}%;
      `;
    }
  }, [screenSize, canvas]);

  const resetScreenSize = (value: string) => {
    setScreenSize(value);
    dispatch(sliceSetVideoSize(value));
    setStoredResizeValue(value);
  };

  const setFilter = (filter: filterType) => {
    if (videoElem && filter.title === "default" && filter.filter) {
      videoElem.style["filter"] = filter.filter;

      setSelectedFilters([]);
      setStoredVideoFilters([]);
      setStoredFilterValues(defaultVideoValues);
      setFilterValues(defaultVideoValues);
    } else if (!selectedFilters.find((f) => f.title === filter.title)) {
      filter.isSelected = true;

      const updatedFilters = [...selectedFilters, filter];
      setSelectedFilters(updatedFilters);
      setStoredVideoFilters(updatedFilters);
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
    const updatedFilterValues = {
      ...filterValues,
      [filter.title]: filter.defaultValue + "",
    };

    setFilterValues(updatedFilterValues);
    removeFilter(filter);
    updatedFilterValues && applyFilter(updatedFilterValues, videoElem);
  };

  // Remove the filter.
  const removeFilter = (filter: filterType) => {
    filter.isSelected = false;

    const updatedFilters = selectedFilters.filter(
      (f) => f.title !== filter.title
    );
    setSelectedFilters(updatedFilters);
    setStoredVideoFilters(updatedFilters);
    applyFilter(filterValues, videoElem);
  };

  const setPresetFilter = (filter: filterType) => {
    // Reset filter values.
    setFilterValues(() => defaultVideoValues);
    setStoredFilterValues(defaultVideoValues);
    setStoredVideoFilters([]);
    setSelectedFilters(() => []);
    setSelectedPreset(() => filter.title);
    dispatch(sliceSetPresetFilter(filter));
    if (filter.title === "None") return;
    const filterValue = filter.sampleFilter!;
    const filtersArray = filterValue.split(" ");
    const regex = /([a-z-]+)\(([0-9]+(?:\.[0-9]+)?)(deg|%)?\)/;
    const reducedFilterValues = filtersArray.reduce((acc, value) => {
      const match = value.match(regex);
      if (!match) return acc;
      let filterName = match[1];
      let filterValue: any = null;
      if (filterName === "hue-rotate") filterName = "hue";
      if (filterName === "sepia" || filterName === "saturate") {
        filterValue = `${parseFloat(match[2])}`;
      } else if (filterName === "hue") {
        const hueValue = parseFloat(match[2]);
        filterValue = `${getPositiveHueValue(hueValue)}deg`;
      } else filterValue = `${parseFloat(match[2]) / 100}`;
      return { ...acc, [filterName]: filterValue };
    }, {});

    setFilterValues(() => reducedFilterValues);
    setStoredFilterValues(reducedFilterValues);
    for (const value of filtersArray) {
      const match = value.match(regex);
      if (!match) continue;
      let filterName = match[1];
      if (filterName === "hue-rotate") filterName = "hue";
      setSelectedFilters((selected) => [...selected, { title: filterName }]);
      setStoredVideoFilters([...selectedFilters, { title: filterName }]);
    }
    reducedFilterValues && applyFilter(reducedFilterValues, videoElem);
  };

  // On change filter values.
  const onChangeFilterValues: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const filter = filters.find((f) => f.title === name);
    const newValue = String(value);

    if (filter) {
      filter.defaultValue + "" === newValue
        ? removeFilter(filter)
        : setFilter(filter);
    }

    const changedFilterValues = {
      ...filterValues,
      [name]: newValue,
    };
    setSelectedPreset(() => "");
    setFilterValues(() => changedFilterValues);
    setStoredFilterValues(changedFilterValues);
    changedFilterValues && applyFilter(changedFilterValues, videoElem);
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
                    resetScreenSize("100");
                    setSelectedPreset("");
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
              <img src={thumbs ? thumbs : ""} alt={filters[0].title} />
            </div>
            <Slider
              key={resizeFilter.title}
              filter={resizeFilter}
              onChange={onChangeScreenSize}
              reset={(filter) => resetScreenSize(filter.defaultValue + "")}
              rangeValue={screenSize}
            />
          </FilterView>
          {filters.map(
            (filter, index) =>
              filter.title !== "default" && (
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
                    <img src={thumbs ? thumbs : ""} alt={filter.title} />
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
                selectedPreset={
                  selectedPresetFilter === filter.title ||
                  filter.title === presetFromRedux.title
                }
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
