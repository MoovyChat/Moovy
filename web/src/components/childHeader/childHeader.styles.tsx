import styled from 'styled-components';

export const ChildHeaderStyles = styled.div`
  position: sticky;
  top: 0;
  padding: 5px 0;
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
    margin-left: 20px;
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
    font-size: 1.5rem;
    color: #e9e9e9; /* Dark gray for high readability */
    margin-left: 10px;
  }
`;
