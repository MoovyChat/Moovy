import styled from 'styled-components';

export const VideoParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  padding: 20px 5px;
  .title {
    font-weight: 800;
    font-size: 1.5rem;
    padding: 5px;
    text-align: center;
    /* color: white; */
  }
  .filters {
    display: flex;
    padding: 10px 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .borders {
    display: flex;
    flex: 1 0 auto;
    flex-wrap: wrap;
  }
`;

type filterProps = {
  filter?: string;
};
export const FilterView = styled.div<filterProps>`
  height: 80px;
  flex: 1 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .photo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      filter: ${(p) => p.filter};
      width: 50px;
      height: 50px;
      border: 1px solid black;
      border-radius: 50%;
    }
    .layover {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border: 1px solid black;
      color: #ff005d;
      background-color: rgba(186, 178, 178, 0.824);
      border-radius: 50%;
    }
    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    :active {
      transform: scale(1);
    }
  }
  .title {
    font-weight: 600;
    font-size: 1rem;
  }
`;

type shadowProps = {
  color: string;
};
export const BoxShadows = styled.div<shadowProps>`
  height: 20px;
  width: 20px;
  margin: 10px;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.text};
  background-color: ${(p) => p.color};
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  :active {
    transform: scale(1);
  }
`;
