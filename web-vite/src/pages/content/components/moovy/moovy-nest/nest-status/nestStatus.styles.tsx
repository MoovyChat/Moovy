import styled from "styled-components";

export const StyledNestStatus = styled.div`
  display: flex;
  gap: 10px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 10px;
  font-size: 10px;
  margin-bottom: 10px;
  .nest-status {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    box-shadow: 0 0 4px;
    padding: 5px;
  }
  .people-count {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    box-shadow: 0px 0px 4px;
    padding: 5px 10px;
    cursor: pointer;
    :active {
      box-shadow: 0px 0px 3px;
    }
    .peopleCount {
      font-weight: 600;
      font-size: 14px;
    }
  }
  .nest-button {
    text-align: center;
    box-shadow: 0px 0px 3px;
    padding: 5px 10px;
    background: crimson;
    cursor: pointer;
    border-radius: 18px;
  }
`;
