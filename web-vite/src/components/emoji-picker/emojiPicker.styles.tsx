import styled from "styled-components";

export const EmojiPickerParent = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 99%;
  padding: 20px;
  flex-direction: column;
  overflow: hidden;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 100%;
    height: calc(100% - 140px);
    overflow-x: auto;
    overflow-y: hidden;
    will-change: transform;
    .group-container {
      display: flex;
      height: 100%;
      flex-direction: column;
      overflow: scroll;
      width: 100%;
    }
  }
  .hovered-emoji {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 10px;
    border-radius: 14px;
    background-color: rgb(74, 85, 104);
    position: absolute;
    bottom: 0;
    .hov-emoji {
      font-size: 40px;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hov-desc {
      color: white;
      width: 80%;
    }
  }
`;

export const EmojiPickerHeader = styled.div`
  display: flex;
  height: 32px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.headerBg};
  padding: 4px;
  margin: 10px 0;
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
  color: ${(p) => (p.selectedGroup ? "#2d3748" : "#a0aec0")};
  font-weight: ${(p) => (p.selectedGroup ? "bold" : "normal")};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #2d3748;
  }
  &::after {
    content: "";
    display: block;
    width: ${(p) => (p.selectedGroup ? "100%" : "0%")};
    height: 2px;
    background-color: ${(p) => p.theme.chatText};
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const EmojiSearch = styled.div`
  box-shadow: 0 0 2px;
  width: 100%;
  height: 30px;
  margin: 5px 0;
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 4px;
  font-size: 12px;
  input {
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    outline: none;
    width: calc(100% - 50px);
    color: ${(p) => p.theme.text};
  }
`;
