import styled from 'styled-components';

export const LeftParent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  .profile {
    width: 100px;
    aspect-ratio: 1;
    position: relative;
    margin: 10% 0;
    height: 100px;
  }
  .options {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px 0px 0px 20px;
      width: 70%;
      padding: 10px;
      color: inherit;
      text-decoration: none;
      :hover {
        background-color: #ff0044;
        cursor: pointer;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 30%;
      }
      .text {
        flex: 1 0 80%;
        font-weight: 600;
      }
    }
    .active {
      color: gold;
    }
  }
`;
