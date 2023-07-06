import styled from 'styled-components';

export const StyledFirstPage = styled.div`
  height: 100vh;
  width: 100%;
  color: #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center; // Added for centering on small screens
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin: 0 3.75rem;
  padding: 4rem 0 3rem;
  font-family: Poppins;

  .flex-pics {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .flex-1 {
    flex: 1 1 0%;

    div {
      h1 {
        font-size: 4.5rem;
        font-weight: 700;
        line-height: 4.5rem;
      }

      p {
        font-size: 1.5rem;
        line-height: 2.4375rem;
        margin-top: 1rem;
      }
    }

    .pics {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      height: 100%;

      .pic {
        position: absolute;
        height: 70%;

        .image {
          height: 500px;
          width: 300px;
          transform: skew(351deg, 10deg) translateX(10px) translateY(50px);
          border: 1px solid;
          content: '';
        }
      }

      .first {
        transform: rotate(349deg) translateY(-33px) translateX(-40px);
        transition: all 0.5s;
      }

      .second {
        transition: all 0.5s;
      }

      :hover {
        .first {
          transform: rotate(340deg) translateY(-50px) translateX(-100px);
        }
        .second {
          transform: rotate(5deg) translateX(40px);
        }
      }
    }
  }

  /* Styles for devices with max width of 768px */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 1.5rem;
    padding: 2rem 0 1.5rem;
    .flex-pics {
      display: none;
    }
    .flex-1 {
      margin: 0 5em;
      text-align: center;
      div {
        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 2rem;
        }
      }

      .pics {
        display: none;
      }
    }
  }

  /* Styles for larger screens, bigger font size */
  @media (min-width: 1440px) {
    font-size: 1.5rem;

    .flex-1 {
      div {
        h1 {
          font-size: 7rem;
          line-height: 7rem;
        }

        p {
          font-size: 2.4rem;
          line-height: 4rem;
        }
      }
    }
  }
`;
