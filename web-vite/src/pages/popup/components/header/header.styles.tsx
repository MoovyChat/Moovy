import styled from "styled-components";

// theme is now fully typed
export const Perimeter = styled.div`
  display: flex;
  font-family: "Lexend", sans-serif;
  padding: 10px 0;
  width: 300px;
  color: white;
  .settings {
    align-self: flex-end;
    :hover {
      cursor: pointer;
    }
  }
`;

export const LogoBlock = styled.div`
  flex-basis: 10%;
  text-align: end;
  img {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderBlock = styled.div`
  flex-basis: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 10px;
  }
`;
