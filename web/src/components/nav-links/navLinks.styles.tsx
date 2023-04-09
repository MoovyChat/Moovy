import styled from 'styled-components';

export const StyledNavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 0.5px solid;
  padding: 10px;
  font-weight: 600;
  transition: all 0.5s;
  a {
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    line-height: 20px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    div {
      padding: 4px 10px;
    }
    :hover {
      cursor: pointer;
      div {
        border-radius: 15px;
        box-shadow: 0 0 1px;
      }
    }
  }
  .active {
    div {
      border-radius: 15px;
      box-shadow: 0 0 5px;
    }
  }
`;
