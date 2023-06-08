import styled from "styled-components";

export const StyledMoovyNest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  gap: 10px;
  overflow: hidden;
  .emoji-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 500px;
    display: flex;
    background-color: ${(p) =>
      p.theme.theme === "dark" ? "#101010" : "#DFDFDF"};
    transform: translateY(-20%);
    overflow: hidden;
    z-index: 2;
  }
`;

export const TypingStatus = styled.div`
  font-size: 10px;
  color: #00fff2;
  font-style: italic;
  margin-left: 10px;
`;

export const NestHeading = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .nest-heading {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .nest-input {
    border: 2px solid rgb(204, 204, 204);
    display: flex;
    border-radius: 18px;
    overflow: hidden;
    .fixed-label {
      background-color: #666;
      text-align: center;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px 5px;
    }
    .nst-input {
      padding: 2px 5px;
      outline: none;
      transition: all 0.1s ease-in-out 0s;
      background-color: transparent;

      // For the placeholder
      &::placeholder {
        color: #ccc;
      }

      &:hover {
        border-color: #888;
      }

      &:focus {
        border-color: #666;
      }
    }
  }
`;
