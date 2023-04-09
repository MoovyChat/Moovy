import styled from 'styled-components';

export const StatsWindow = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  .title {
    font-size: large;
  }
  .count {
    font-size: medium;
    font-weight: 800;
  }
`;
