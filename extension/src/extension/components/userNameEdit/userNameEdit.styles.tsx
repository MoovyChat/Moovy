import styled from 'styled-components';

export const UserNameEditParent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  font-family: 'Press Start 2P', cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .submit,
  .error {
    margin: 0 5px;
    :hover {
      cursor: pointer;
    }
    :active {
      transform: scale(0.95);
    }
  }
  .submit {
    color: #00ff00;
  }
  .error {
    color: #ff0000;
  }
  .edit-name-text {
    color: white;
    font-size: 1em;
  }
  .edit-name {
    height: 30px;
    width: 90%;
    border-radius: 10px;
    box-shadow: inset 0 0 2px white;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      color: white;
      border: none;
      outline: none;
      background: none;
      padding: 5px 7px;
      font-size: 1em;
      width: 90%;
      display: flex;
      justify-content: center;
      font-family: 'Press Start 2P', cursive;
      :focus,
      :hover {
        background: none;
        border: none;
        outline: none;
      }
      ::placeholder {
        color: #ffffffa0;
        font-size: 1em;
      }
    }
  }
`;
