import styled from 'styled-components';

export const MovieMiniParent = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  font-size: 1.4em;
  justify-content: flex-start;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const OptionPerimeter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  .favorite {
    cursor: pointer;
    :hover {
      color: gold;
      transform: scale(1.1);
      font-weight: 800;
    }
  }
  .like {
    cursor: pointer;
  }
`;
