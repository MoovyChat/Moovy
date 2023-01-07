import styled from 'styled-components';

export const WatchVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: #a31414;
  font-size: 0.6em;
  color: #fff;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    filter: contrast(120%);
    border-radius: 0px;
    box-shadow: 0 0 5px;
    transform: scale(1.1);
  }
`;
