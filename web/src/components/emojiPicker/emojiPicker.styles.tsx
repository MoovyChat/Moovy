import styled from 'styled-components';

export const EmojiPickerParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: auto;
  height: auto;
  top: 10px;
  left: 0;
  padding: 0px 20px;
  border-radius: 18px;
  border: 1px solid;
  backdrop-filter: blur(10px);
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`;

export const EmojiPickerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
  margin-bottom: 15px;
  border-radius: 18px;
  padding: 5px 10px;

  border-bottom: 1px solid;
  backdrop-filter: blur(10px);
`;

type props = {
  selectedGroup: boolean;
};
export const HeaderKey = styled.div<props>`
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 0 5px white, inset 0 0 5px #6d0e85;
  border: ${(p) => (p.selectedGroup ? '1px solid' : 'none')};
  filter: ${(p) => (p.selectedGroup ? 'contrast(1.5)' : 'brightness(0.8)')};
  transform: ${(p) => (p.selectedGroup ? 'scale(1.3)' : 'scale(0.9)')};
  transition: transform 0.5s linear;
`;
