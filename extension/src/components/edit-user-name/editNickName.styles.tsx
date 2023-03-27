import styled from 'styled-components';

type props = {
  isError: boolean;
};
export const EditNickNameParent = styled.div<props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 250px;
  height: 130px;
  z-index: 99999;
  background-color: #232324;
  border-radius: 20px;
  box-shadow: 0 0px 5px 4px ${(p) => (p.isError ? ' #7e0017' : ' #0baf39')},
    inset 0 0 3px black;

  .edit-user-name-title {
    font-weight: 400;
    font-size: 2em;
    align-self: flex-start;
    margin-left: 15px;
  }
  .edit-user-name-box {
    height: 30px;
    width: 90%;
    border-radius: 10px;
    box-shadow: inset 0 0 2px white;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      border: none;
      outline: none;
      background: none;
      padding: 5px 7px;
      font-size: 2em;
      width: 90%;
      display: flex;
      justify-content: center;
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
