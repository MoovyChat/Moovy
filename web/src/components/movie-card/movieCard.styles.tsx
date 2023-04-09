import styled from 'styled-components';

type props = {
  bg: string;
};
export const MovieCardParent = styled.div<props>`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  border-radius: 3px;
  background-image: url(${p => p.bg});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3px;
    backdrop-filter: blur(5px) brightness(60%);
    .thumbs {
      flex: 1 1 15%;
      padding: 0 10px;
      overflow: hidden;
      img {
        height: 120px;
        width: 100%;
        object-fit: cover;
      }
    }
    .info {
      flex: 1 1 85%;
      width: 85%;
      overflow: hidden;
    }
  }
`;
