import styled from 'styled-components';

export const MovieThreadParent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 10px;
  height: 100%;
  .thread-movie {
    display: block;
  }
  .thread-comments {
    margin-top: 10px;
    position: relative;
    display: block;
    max-height: calc(80vh - 20px);
    margin-left: auto;
    margin-right: auto;
    width: 99%;
    font-weight: 700;
    overflow-y: scroll;
    .show-more {
      font-size: 0.7em;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
