import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 600px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;

  label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }

  input,
  textarea {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    width: 95%;
    background-color: #f5f5f5;
    color: #333;
    transition: box-shadow 0.2s ease-in-out;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 3px 3px rgba(0, 119, 255, 0.1);
      outline: none;
    }
  }

  textarea {
    height: 150px;
  }

  button[type='submit'] {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #4e67eb;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`;
