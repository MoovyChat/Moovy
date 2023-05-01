import styled from "styled-components";

export const StyledOtt = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .ott {
    display: flex;
    box-shadow: 0 0 2px white;
    padding: 4px 8px;
    border-radius: 18px;
    justify-content: space-between;
    align-items: center;
    .ott-title {
      margin-left: 10px;
    }
    .ott-image {
      width: 20px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;
