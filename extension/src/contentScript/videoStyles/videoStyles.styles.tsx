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
  selected?: boolean;
};
export const FilterView = styled.div<filterProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  .photo {
    display: flex;
    flex: 1 1 20%;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    img {
      filter: ${(p) => p.filter};
      width: 40px;
      height: 40px;
    }
  }
  .slider-title {
    font-weight: 600;
    font-size: 1rem;
    padding: 5px;
    color: ${(p) => p.selected && 'white'};
    border-radius: 10px;
    background-color: ${(p) => (p.selected ? '#2672c3' : '')};
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

export const CustomBorder = styled.div`
  position: relative;
  align-self: center;
  border-radius: 50%;
  display: flex;
  width: 20px;
  margin: 10px;
  border: 1px solid #363537;
  height: 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  input {
    position: absolute;
    height: 40px;
    width: 40px;
    top: -10px;
    left: -10px;
  }
`;

type props = {
  expandGroup: boolean;
};
export const OptionGroup = styled.div<props>`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 4px;
  max-height: ${(p) => (p.expandGroup ? '600px' : '40px')};
  overflow: hidden;
  margin: 0 10px;
  transition: max-height 0.5s linear;
  .title {
    font-size: 1.8em;
    margin: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    justify-content: space-between;
    cursor: pointer;
    .name {
      display: flex;
      align-items: center;
      .name-icon {
        display: flex;
      }
      label {
        padding-left: 5px;
      }
    }
    .edge {
      display: flex;
      .checkBox {
        display: flex;
        padding: 0 5px;
        input {
          width: 0;
          height: 0;
          visibility: hidden;
          :checked + label {
            background: #242424;
            ::after {
              transform: translateX(100%);
              background: linear-gradient(180deg, #777, #3a3a3a);
            }
          }
        }
        label {
          width: 40px;
          height: 20px;
          position: relative;
          display: block;
          background: #c9c9c9;
          border-radius: 200px;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.5s;
          overflow: hidden;
          :active:after {
            width: 23px;
          }
          :after {
            content: '';
            height: 20px;
            width: 20px;
            position: absolute;
            top: 0;
            left: 0px;
            background: linear-gradient(180deg, #cbcbcb, #ededed);
            border-radius: 180px;
            box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
              inset 0px -5px 15px rgba(255, 255, 255, 0.4);
            transition: all 0.5s;
          }
        }
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 10px;
      }
    }
  }

  .options {
    height: auto;
    overflow: auto;
    .option {
      margin: 5px 0;
    }
  }
`;
