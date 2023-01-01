import styled from 'styled-components';

type props = {
  backColor: string;
};
export const OptionsParent = styled.div<props>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(p) => p.backColor};
  box-shadow: 0 0 18px 20px ${(p) => p.backColor};
  .logo {
    width: 45px;
    height: 45px;
    margin: 5px 20px;
    img {
      height: 45px;
      width: 45px;
    }
  }
  .title {
    width: 100%;
    height: 100%;
    display: flex;
    transform: translateX(-40px);
    font-size: 1.3rem;
    letter-spacing: 4px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
