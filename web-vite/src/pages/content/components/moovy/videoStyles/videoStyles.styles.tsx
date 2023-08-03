import styled from "styled-components";

export const VideoParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  overflow: auto;
`;

type filterProps = {
  filter?: string;
  selected?: boolean;
  accentColor?: string;
  selectedPreset?: boolean | null;
};

export const PresetFilter = styled.div<filterProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  font-size: 12px;
  cursor: pointer;
  gap: 3px;
  :hover {
    .photo {
      filter: brightness(0.5);
    }
  }
  .photo,
  .show-val {
    display: flex;
    flex: 1 1 20%;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      filter: ${(p) => p.filter};
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: ${(p) =>
        p.selectedPreset && `0 0 0 2px black, 0 0 0 4px ${p.accentColor}`};
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
  }
`;

export const FilterView = styled.div<filterProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  .show-val {
    box-shadow: inset 0 0 4px;
    border-radius: 18px;
  }
  .photo,
  .show-val {
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
      object-fit: cover;
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
  }
  .slider-title {
    font-weight: 600;
    font-size: 1rem;
    padding: 5px;
    color: ${(p) => p.selected && "white"};
    border-radius: 10px;
    background-color: ${(p) => (p.selected ? "#2672c3" : "")};
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
  border-radius: 18px;
  display: flex;
  width: 40px;
  margin: 10px;
  border: 1px solid #363537;
  height: 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  :active {
    transform: scale(1);
  }
  input {
    position: absolute;
    cursor: pointer;
    height: 40px;
    width: 60px;
    top: -10px;
    left: -10px;
    z-index: 1;
    opacity: 0;
  }
  .icon {
    cursor: pointer;
    position: absolute;
    z-index: 0;
  }
`;

type props = {
  expandGroup: boolean;
  isNodesValid?: boolean;
  color?: string;
};
export const OptionGroup = styled.div<props>`
  display: flex;
  flex-direction: column;
  backdrop-filter: contrast(0.9);
  padding: 10px 0;
  border-radius: 4px;
  max-height: ${(p) => (p.expandGroup ? "600px" : "40px")};
  margin: 10px;
  transition: max-height 0.5s linear;
  .title {
    font-size: 18px;
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
      .nodes-status {
        padding: 4px;
        font-size: 7px;
        border-radius: 18px;
        font-weight: 900;
        margin: 0px 4px;
        background-color: ${(p) =>
          p.isNodesValid === true
            ? "green"
            : p.isNodesValid === false
            ? "red"
            : ""};
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
            background: ${(p) => `${p.color}8f`};
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
            content: "";
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

  .presets {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
    overflow: auto;
    gap: 15px;
    padding: 5px;
  }

  .options {
    max-height: ${(p) => (p.expandGroup ? "auto" : "0")};
    overflow: auto;

    label {
      font-size: 14px;
    }
    .tool-option {
      display: flex;
      width: 100%;
      margin: 10px 0;
      justify-content: space-evenly;
      align-items: center;
      .option-text {
        font-size: 14px;
        flex: 1 1 45%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 20px;
      }
      .option-choice {
        flex: 1 1 0%;
        .accent {
          margin: 0;
        }
      }
      .checkBox {
        display: flex;
        padding: 0 5px;
        flex: 1 1 0%;
        input {
          width: 0;
          height: 0;
          visibility: hidden;
          :checked + label {
            background: ${(p) => `${p.color}8f`};
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
            content: "";
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
      .select-container {
        display: inline-flex;
        align-items: center;
        padding: 2px;
        width: 100px;
        margin: 0 10px;
        border-radius: 8px;
        background-color: ${(p) => p.theme.chatText};
        box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
        transition: box-shadow 0.2s ease-in-out;
        justify-content: center;

        .select {
          font-size: 12px;
          font-weight: 500;
          color: ${(p) => p.theme.chatBody};
          border: none;
          background-color: transparent;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          outline: none;
          cursor: pointer;
          text-align: center;

          .option {
            font-size: 14px;
            font-weight: 500;
            color: ${(p) => p.theme.chatBody};
          }
        }

        .select:focus + .select-container {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }
    .ready {
      display: flex;
      flex-direction: column;
      label {
        padding: 5px 10px;
        font-size: 1.3rem;
      }
      .border-list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        .custom-option {
          flex: 1 1 15%;
        }
      }
    }
    .option {
      margin: 5px 0;
    }
  }
`;
