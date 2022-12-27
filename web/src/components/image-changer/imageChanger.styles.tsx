import styled from 'styled-components';

type props = {
  url?: string;
};
export const ImageChangerParent = styled.div<props>`
  position: relative;
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  .heading {
    font-size: 1.1em;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
  }
  .save-close {
    display: flex;
    z-index: 6;
    .save {
      position: absolute;
      pointer-events: ${(p) => (p.url ? 'all' : 'none')};
      right: 15px;
      top: 20px;
    }
    .close {
      position: absolute;
      left: 15px;
      top: 20px;
    }
  }
  .options {
    display: flex;
    position: relative;
    padding: 20px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    .or {
      position: absolute;
      border: 1px solid;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 5px;
      box-shadow: inset 0 0 10px, 0 0 3px;
    }
    .from {
      flex: 1 1 50%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      .text {
        font-weight: 600;
        line-height: 16px;
        margin-bottom: 10px;
      }
    }
    .url,
    .local {
      flex-direction: column;
      .input {
        width: 90%;
        border-radius: 20px;
        padding: 5px;
        display: flex;
        box-shadow: inset 0 0 5px, 0 0 2px;
        justify-content: center;
        align-items: center;
        .icon {
          width: 10%;
        }
        input {
          border: none;
          background: none;
          width: 90%;
          height: 100%;
          color: ${(p) => p.theme.text};
          :active,
          :focus {
            border: none;
            background: none;
            outline: none;
          }
        }
      }
    }
  }
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .in {
      display: flex;
      justify-content: center;
      align-items: center;
      .e-in-e {
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 990vh;
    .heading {
      font-size: 1em;
      font-weight: 600;
    }
    .save-close {
      width: 90%;
      top: 40px;
      .save {
        position: absolute;
        right: 20px;
      }
      .close {
        position: absolute;
        left: 20px;
      }
    }
    .options {
      flex-direction: column;
      .or {
        display: none;
      }
    }
  }
`;

export const DisplayImage = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  .display-container {
    width: 300px;
    max-height: 400px;
    img {
      width: 100%;
      height: 100%;
      border: 0.3px solid;
    }
  }
`;
