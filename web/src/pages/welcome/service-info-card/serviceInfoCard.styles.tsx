import styled from 'styled-components';

interface Props {
  otherWay: boolean;
}
export const StyledServiceInfoCard = styled.div<Props>`
  display: flex;
  padding: 60px;
  justify-content: center;
  gap: 20px;
  flex-direction: ${props => (props.otherWay ? 'row-reverse' : 'row')};
  .service-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: hsla(280, 100%, 49%, 0.29) 6.43px 7.66px 10px 0px;
    font-size: 10px;
    flex-basis: 30%;
    padding: 40px;
    > .image {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .mini-info-image {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        overflow: hidden;
        > img {
          border-radius: 30px;
          box-shadow: 0 0 0 5px #eaf2ff;
        }
      }
      .mini-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        gap: 10px;
        > .heading {
          color: #00204c;
          display: inline;
          font-size: 24px;
          font-weight: 700;
        }
        > .sub-heading {
          color: #00204c;
          font-size: 18px;
          font-family: 'open sans', sans-serif;
          line-height: 21px;
        }
      }
    }
    > .description {
      color: #00204c;
      display: inline;
      font-size: 15px;
      line-height: 24px;
    }
  }
  .mockup-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 70%;
    margin: 10px;
    > img,
    > video {
      width: 90%;
      height: auto;
      object-fit: cover;
      box-shadow: 0 40px 50px rgba(0, 0, 0, 0.2),
        0 30px 20px rgba(0, 0, 0, 0.22);
    }
  }
`;
