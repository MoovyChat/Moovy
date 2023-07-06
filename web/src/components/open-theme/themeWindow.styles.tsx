import styled from 'styled-components';

interface props {
  primary: string | undefined;
  secondary: string | undefined;
  selected?: boolean;
  current?: boolean;
}

export const StyledThemeWindow = styled.div<props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 60vh;
  position: relative;
  overflow: hidden;
  padding: 50px 40px;
  .themes-preview {
    display: flex;
    height: 100%;
    width: 30vw;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    .left-panel-preview {
      flex: 1 0 15%; /* Adjust the size as per your requirement */
      border-radius: 12px; /* Adjust the border radius */
      margin: 5px; /* Adjust the margin */
      margin-right: -10px; /* Adjust the negative margin */
      max-height: 99%; /* Adjust the maximum height */
      background-color: ${props => props.primary};
      box-shadow: inset 0 0 5px black; /* Adjust the box shadow */
      z-index: 5;
      height: 50%;
      &:hover {
        z-index: 6;
        transform: scale(1.02);
      }
    }

    .center-panel-preview {
      background-color: ${props => props.secondary};
      margin-left: -10px;
      margin-right: -10px;
      z-index: 1;
      height: 60%;
      flex: 1 0 45%;
      border-radius: 18px;
    }
    > div {
      transition: width 0.1s linear;
      margin: auto;
      width: calc(100% - 40px); /* Adjust the width calculation */
    }

    &:hover {
      z-index: 6;
      transform: scale(1.02);

      > div {
        transition: width 0.1s linear;
        margin: 0%;
        width: 100%;
      }
    }
  }
  .right-panel-preview {
    flex: 1 0 15%; /* Adjust the size as per your requirement */
    height: 100%; /* Adjust the height */
    margin-left: -10px; /* Adjust the negative margin */
    background-color: ${props => props.primary};
    border-radius: 12px; /* Adjust the border radius */
    max-height: 99%; /* Adjust the maximum height */
    box-shadow: inset 0 0 5px black; /* Adjust the box shadow */
    z-index: 5;
    height: 50%;
    &:hover {
      z-index: 6;
      transform: scale(1.02);
    }
  }
`;

export const ThemesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 20vw;
  overflow: auto;
`;

export const ThemeItem = styled.button<props>`
  padding: 10px;
  border: 2px solid ${p => p.theme.border};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  background-color: ${p =>
    p.current ? '#919191' : p.selected ? 'grey' : 'black'};
  color: white;
  font-size: 10px;
  .color-representor {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid;
  }
  .primary {
    background-color: ${props => props.primary};
  }
  .secondary {
    background-color: ${props => props.secondary};
  }

  &:hover {
    background-color: lightgray;
  }
`;

export const ApplyButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 80px;
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;
