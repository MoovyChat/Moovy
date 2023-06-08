import styled from "styled-components";

export const StyledGiphy = styled.div`
  width: 100%;
  max-height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  margin-top: 50px;
  box-shadow: 0 0 4px;
  .giphy-logo {
    height: 20px;
    width: 100px;
    position: fixed;
    bottom: 150px;
    right: 30px;
    z-index: 1;
  }
  .giphy-grid {
    width: 300px;
    height: 99%;
  }
  .giphy-gif {
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;
