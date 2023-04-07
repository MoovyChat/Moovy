import styled from 'styled-components';

export const EmojiPickerParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
`;

export const EmojiPickerHeader = styled.div`
  display: flex;
  height: 32px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.headerBg};
  padding: 4px;
  margin-bottom: 20px;
  border-radius: 8px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

type HeaderKeyProps = {
  selectedGroup: boolean;
};
export const HeaderKey = styled.div<HeaderKeyProps>`
  font-size: 14px;
  cursor: pointer;
  color: ${(p) => (p.selectedGroup ? '#2d3748' : '#a0aec0')};
  font-weight: ${(p) => (p.selectedGroup ? 'bold' : 'normal')};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #2d3748;
  }
  &::after {
    content: '';
    display: block;
    width: ${(p) => (p.selectedGroup ? '100%' : '0%')};
    height: 2px;
    background-color: ${(p) => p.theme.chatText};
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;
