import styled from 'styled-components';

export const LeftParent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  .profile {
    width: 100px;
    aspect-ratio: 1;
    position: relative;
    margin: 10% 0;
    height: 100px;
  }
  .options {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px 0px 0px 20px;
      width: 70%;
      padding: 10px;
      color: inherit;
      text-decoration: none;
      :hover {
        background-color: ${(p) => p.theme.hoverColor};
        cursor: pointer;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 30%;
      }
      .text {
        flex: 1 0 80%;
        font-weight: 600;
      }
    }
    .active {
      .icon {
        svg {
          height: 35px;
          width: 35px;
        }
      }
      .icon.feed {
        svg {
          fill: red;
        }
      }
      .icon.catalog {
        svg {
          fill: #ff7b00;
        }
      }
      .icon.p {
        svg {
          fill: #3db847;
        }
      }
      .icon.favorites {
        svg {
          fill: #ff0000;
        }
      }
      .icon.comments {
        svg {
          fill: #00e5ff;
        }
      }
      .icon.replies {
        svg {
          fill: #478887;
        }
      }
      .icon.notifications {
        svg {
          fill: #426bda;
        }
      }
      .text {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-height: 700px) {
    .profile {
      width: 70px;
      height: 70px;
      margin: 20% 0;
    }
  }

  @media (max-height: 550px) {
    .profile {
      display: none;
    }

    .options {
      display: flex;
      justify-content: center;

      height: 100%;
      overflow: auto;
      .option {
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 0 30%;
          svg {
            height: 20px;
            width: 20px;
          }
        }
        .text {
          flex: 1 0 80%;
          font-size: 0.7rem;
          font-weight: 600;
        }
      }
    }
  }
`;
