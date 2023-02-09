import styled from 'styled-components';

export const StyledSearchResults = styled.div`
  height: 100%;
  width: 100%;
  .content {
    overflow: auto;
    height: calc(100% - 100px);
    width: 100%;
  }
`;

export const SearchTitles = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  max-width: 100%;
  min-width: 0;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

export const StyledSearchPeople = styled.div`
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  overflow: auto;
`;
