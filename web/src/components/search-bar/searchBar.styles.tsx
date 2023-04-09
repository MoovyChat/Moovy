import styled from 'styled-components';

export const SearchBarParent = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  backdrop-filter: contrast(0.8);
  .icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50px;
  }
  form {
    width: calc(100% - 50px);
    input {
      background: transparent;
      border: none;
      font-size: 1rem;
      padding: 0.7rem 1rem;
      border-radius: 0.25rem;
      outline: none;
      width: calc(100% - 50px);
      color: ${p => p.theme.text};
    }
  }
`;

export const StyledSearchResults = styled.div`
  position: absolute;
  width: 50%;
  height: 70vh;
  overflow: auto;
  top: 8%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 99;
  border-radius: 9px;
  box-shadow: 0px 0px 5px, 0px 0px 1px 0px;
  backdrop-filter: blur(10px) brightness(0.6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .heading {
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
  }
  .content {
    margin-left: 20px;
    margin-top: 20px;
    width: 95%;
    .content-container {
      width: 98%;
      .people,
      .movies,
      .shows {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 1em;
        font-weight: 600;
      }
      .users-content {
        display: flex;
        gap: 1em;
      }
      .movies-content {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
    .more {
      margin: 15px 0;
      font-weight: 600;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 800px) {
    width: 95%;
    border-radius: 5px;
    box-shadow: 0px 0px 1px 0px, 0px 0px 5px inset;
    .content {
      margin-left: 20px;
      margin-top: 20px;
      width: 93%;
    }
  }
`;

export const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  gap: 5px;
  .p {
    width: 60px;
    height: 60px;
  }
  .n {
    width: 100%;
    display: block;
    overflow: hidden;
    font-size: 0.9em;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  :hover {
    cursor: pointer;
  }
`;

export const StyledTitleCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  .thumbs {
    width: 50px;
    height: 70px;
    object-fit: contain;
    margin: 10px;
  }
  :hover {
    cursor: pointer;
    .t {
      text-decoration: underline;
    }
  }
`;

export const StyledMovieCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  width: 95%;
  height: 70px;
  margin: 10px 0;
  position: relative;
  text-align: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    .mc {
      backdrop-filter: blur(3px) brightness(0.8);
    }
  }
  .mc {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    backdrop-filter: blur(3px) brightness(0.5);
    gap: 10px;
    padding-left: 10px;
    .year,
    .runtime {
      border: 1px solid red;
      padding: 10px;
      border-radius: 10px;
    }
    .year {
    }
    .runtime {
    }
  }
`;
