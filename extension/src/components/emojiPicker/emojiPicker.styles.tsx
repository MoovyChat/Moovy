import styled from 'styled-components';

export const EmojiPickerParent = styled.div`
  display: flex;
  position: relative;
  height: 500px;
  width: 98%;
`;

export const EmojiPickerHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 16px;
  justify-content: space-evenly;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  .header-key {
    font-size: 2em;
    cursor: pointer;
  }
`;
