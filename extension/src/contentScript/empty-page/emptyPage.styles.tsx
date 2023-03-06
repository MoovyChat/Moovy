import styled from 'styled-components';

export const EmptyParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 100%;
  .logo {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .text {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }
  //Enter to
  &.empty-enter-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
  //Enter to
  &.empty-enter-done {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit from
  &.empty-exit {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // exit to
  &.empty-exit-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  // exit to
  &.empty-exit-done {
    background-color: #ff005d;
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`;
