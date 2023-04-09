import styled from 'styled-components';

type props = {
  hasError: boolean;
};
export const EditProfileParent = styled.div<props>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 50vw;
  min-height: 50vh;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    #title {
      font-size: 1rem;
      font-weight: bold;
      color: ${p => p.theme.text};
      margin-bottom: 1rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      #ic {
        padding: 10px;
      }
    }
    .ext {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 10px;
      flex-wrap: wrap;
      #save {
        background: ${p => (p.hasError ? '#9bbc86' : '#459d0e')};
        pointer-events: ${p => (p.hasError ? 'none' : 'auto')};
      }
      #cancel {
        background: #ffffff;
      }
      button {
        padding: 10px 20px;
        border: none;
        font-weight: 600;
        letter-spacing: 1px;
        box-shadow: 0 0 5px;
        transition: 0.2s;
        margin: 20px 0;
        :hover {
          cursor: pointer;
          box-shadow: 0 0 3px 1px ${p => p.theme.text}, inset 0 0 5px black;
        }
        :active {
          box-shadow: 0 0 1px 1px ${p => p.theme.text}, inset 0 0 7px black;
        }
      }
    }
  }
`;
