import styled from 'styled-components';

export const LeftParent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-right: 0.3px solid #8f8f8f81;
  .parent-profile {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    justify-content: center;
    .profile {
      width: 50px;
      height: 50px;
      aspect-ratio: 1;
      position: relative;
      margin: 10% 0;
    }
    .profile-text {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .welcome-text {
        font-size: 13px;
      }
      .user-text {
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
  .options {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      width: 50%;
      padding: 10px;
      color: inherit;
      text-decoration: none;
      font-size: 14px;
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
      transition: all 1s;
      background-color: ${(p) => p.theme.hoverColor};
      .icon {
        svg {
          height: 27px;
          width: 27px;
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
          fill: #6a30ac;
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
      }
    }
  }

  @media (max-height: 700px) {
    .parent-profile {
      .profile {
        width: 70px;
        height: 70px;
        margin: 20% 0;
      }
    }
  }

  @media (max-height: 550px) {
    .parent-profile {
      display: none;
      .profile {
        display: none;
      }
    }

    .options {
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
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

export const StyledLinks = styled.div`
  padding: 20px;
  flex-wrap: wrap;
  width: 80%;
  font-size: 10px;
  line-height: 15px;
  color: #71767b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
