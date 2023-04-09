import styled, { css } from 'styled-components';

import { IoCloudUploadOutline } from 'react-icons/io5';

type props = {
  url?: string;
};
export const ImageChangerParent = styled.div<props>`
  position: relative;
  width: 50vw;
  min-height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .heading {
    font-size: 1.1em;
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    .close {
      cursor: pointer;
      position: absolute;
      right: 15px;
      top: 15px;
      z-index: 2;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        box-shadow: inset 0 0 5px;
      }
    }
  }
  .save-close {
    display: flex;
    z-index: 6;
    .save {
      z-index: 2;
      position: absolute;
      pointer-events: ${p => (p.url ? 'all' : 'none')};
      right: 15px;
      bottom: 20px;
    }
  }
  .options {
    display: flex;
    position: relative;
    padding: 0px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
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
          color: ${p => p.theme.text};
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
      flex-direction: column;
      .loading {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .e-in-e {
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 50vh;
    .heading {
      font-size: 1em;
      font-weight: 600;
      height: 50px;
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    .save-close {
      width: 90%;
      .save {
        position: absolute;
        right: 20px;
        bottom: 100px;
      }
    }
    .options {
      flex-direction: column;
      height: 120px;
      margin-top: 12px;
      border: 1px solid;
      padding: 30px;
      .or {
        display: none;
      }
    }
  }
`;

export const DisplayImage = styled.div`
  position: relative;
  align-items: flex-start;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .display-container {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 25px;
    .controls {
      position: absolute;
      bottom: 0;
      width: 200px;
      background-color: #181818bd;
      padding: 10px 20px;
      border-radius: 20px;
    }
    .cropper-container {
      display: flex;
      flex-direction: column;
      .container {
      }
    }
    .dropzone {
      width: 99%;
      height: 99%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      :hover {
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 100%;
      border: 0.3px solid;
    }
  }
`;

type DragProps = {
  isDragActive: boolean;
  isDragReject: boolean;
};
export const DropzoneContainer = styled.div<DragProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  background-color: ${({ isDragActive }) =>
    isDragActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  color: ${({ isDragReject }) => (isDragReject ? '#ff1744' : 'inherit')};
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: ${({ isDragActive }) =>
    isDragActive
      ? '0px 0px 15px rgba(0, 128, 0, 0.3)'
      : '0px 0px 15px rgba(0, 0, 0, 0.1)'};

  &:focus {
    outline: none;
  }

  ${({ isDragActive, isDragReject }) =>
    (isDragActive || isDragReject) &&
    css`
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 15px rgba(0, 128, 0, 0.3);
    `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 15px rgba(0, 128, 0, 0.3);
  }
`;

export const ErrorMsg = styled.p`
  color: #ff1744;
  font-size: 0.8em;
  margin-top: 0.5em;
`;

export const DropzoneIcon = styled(IoCloudUploadOutline)`
  font-size: 3em;
  margin-bottom: 1em;
`;

export const DropzoneText = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: center;
`;

export const FileRejectionList = styled.ul`
  margin-top: 1em;
  list-style: none;
  padding-left: 0;
`;
