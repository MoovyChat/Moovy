import styled from 'styled-components';

export const EmojiPickerParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 98%;
  padding: 0px 20px;
`;

export const EmojiPickerHeader = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  justify-content: space-evenly;
  background-color: #a6a6a6;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

type props = {
  selectedGroup: boolean;
};
export const HeaderKey = styled.div<props>`
  font-size: 2em;
  cursor: pointer;
  filter: ${(p) => (p.selectedGroup ? 'none' : 'grayscale(1)')};
  transform: ${(p) => (p.selectedGroup ? 'scale(1.3)' : 'scale(0.9)')};
  transition: transform 0.5s linear;
`;
