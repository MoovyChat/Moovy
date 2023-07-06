import styled from "styled-components";

export const StyledListUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 250px;
`;

export const StyledListUser = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  padding: 3px 0;
  .usr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-left: 5px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
    .nickname {
      font-size: 14px;
    }
  }
  .options {
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    .badge {
      padding: 5px 7px;
      border-radius: 18px;
      font-weight: 600;
      color: white;
      font-size: 12px;
    }
    .admin {
      background-color: #068800;
      pointer-events: none;
    }
    .kick {
      background-color: #fb0606;
      cursor: pointer;
      :hover {
        box-shadow: 0 0 4px;
      }
    }
  }
`;
