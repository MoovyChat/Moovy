import styled from 'styled-components';

export const StyledMiniInfo = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: hsla(280, 100%, 49%, 0.11) 6.43px 7.66px 10px 0px;
  display: flex;
  color: #00204c;
  max-height: 160px;
  width: 280px;
  padding: 10px;
  .mini-info-image {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin: 10px;
    box-shadow: 0 0 0 5px #eaf2ff;
  }
  .mini-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'open-sans', sans-serif;
    padding: 10px;
    gap: 5px;
    .info-title {
      font-size: 18px;
      font-weight: 600;
    }
    .info-sub-title {
      font-size: 16px;
      line-height: 1.4em;
    }
  }
`;
