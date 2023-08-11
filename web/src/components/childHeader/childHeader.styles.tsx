import styled from 'styled-components';

export const ChildHeaderStyles = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 1;
  width: 100%;
  transition: background-color 0.3s ease;

  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 4px;
    transition: background-color 0.2s ease, box-shadow 0.2s ease; /* Adding transition for smooth hover and active effects */

    :hover {
      cursor: pointer;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
    }

    :active {
    }
  }

  .header-text {
    font-family: 'Roboto', sans-serif; /* Modern, readable font */
    font-size: 14px;
    margin-left: 10px;
  }
`;
