import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';

import { batch } from 'react-redux';
import { ThemeKeys, themes } from '../../constants';
import { sliceSetTheme } from '../../redux/slices/settingsSlice';
import {
  ApplyButton,
  StyledThemeWindow,
  ThemeItem,
  ThemesList,
} from './themeWindow.styles';
import { THEME_PALETTE, ThemeProps } from '../../utils/themes/theme';
import { useTheme } from 'styled-components';

const ThemeWindow: React.FC = () => {
  const currentTheme = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<ThemeProps>(
    currentTheme ? (currentTheme as ThemeProps) : THEME_PALETTE.RED_SATIN,
  );
  const dispatch = useAppDispatch();

  const cancelHandler = () => {
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetPopupData(null));
    });
  };

  const applyThemeHandler = () => {
    const finalSelectedTheme = themes[selectedTheme.themeType as ThemeKeys];
    dispatch(sliceSetTheme(finalSelectedTheme));
    cancelHandler();
  };

  const setThemeHandler = (value: ThemeKeys) => {
    setSelectedTheme(THEME_PALETTE[value]);
  };

  // Get the keys of themes object
  const themeKeys = Object.keys(themes);

  // Move the current theme to the front of the array
  const sortedThemeKeys: ThemeKeys[] = [
    (currentTheme as any)?.themeType,
    ...themeKeys.filter(key => key !== (currentTheme as any)?.themeType),
  ];

  return (
    <StyledThemeWindow
      primary={selectedTheme?.primary}
      secondary={selectedTheme?.secondary}
    >
      <ThemesList>
        {sortedThemeKeys.map(key => {
          const value = themes[key];
          return (
            <ThemeItem
              key={key}
              primary={THEME_PALETTE[value]?.primary}
              secondary={THEME_PALETTE[value]?.secondary}
              current={
                (currentTheme as any)?.themeType ===
                THEME_PALETTE[value].themeType
              }
              selected={
                selectedTheme.themeType === THEME_PALETTE[value].themeType
              }
              onClick={e => {
                e.stopPropagation();
                setThemeHandler(value);
              }}
            >
              <div className="color-representor primary"></div>
              <div className="color-representor secondary"></div>
              {value.replaceAll('_', ' ')}{' '}
              {(currentTheme as any)?.themeType ===
                THEME_PALETTE[value].themeType && '(CURRENT)'}
            </ThemeItem>
          );
        })}
      </ThemesList>
      <div className="themes-preview">
        <div className="left-panel-preview"></div>
        <div className="center-panel-preview"></div>
        <div className="left-panel-preview"></div>
      </div>
      <ApplyButton onClick={applyThemeHandler}>Apply</ApplyButton>
    </StyledThemeWindow>
  );
};

export default ThemeWindow;
