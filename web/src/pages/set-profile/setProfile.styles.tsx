import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledSetProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease;
  width: 100%;
  min-height: 100dvh;
  font-family: system-ui;
  background-color: white;
  color: black;
  transition: all 0.5s;
  .title {
    .logo {
      padding: 10px 0;
      img {
        height: 100px;
      }
    }
  }
  .moovy-steps-container {
    display: flex;
    width: 99vw;
    color: black;
  }
  .moovy-profile-title {
    display: flex;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: flex-start;
    position: relative;
    gap: 20px;
    .pic-container {
      width: 60px;
      height: 60px;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      -webkit-box-pack: center;
      justify-content: space-evenly;
      gap: 5px;
      .title {
        font-weight: 600;
      }
      .description {
      }
    }
  }
`;

export const StyledSteps = styled.div`
  flex: 1;
  flex-basis: 20%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 50px;
  justify-content: center;
  align-items: flex-start;
  .step {
  }
`;
export const StyledDescription = styled.div`
  flex: 1 1 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .step-index {
      padding: 10px;
      font-size: 14px;
      font-weight: 700;
      background-color: blueviolet;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      color: white;
    }
    .next-index {
      background-color: black;
      cursor: pointer;
      :hover,
      :focus {
        background-color: #3a65c4;
      }
      :active {
        background-color: #1d315d;
      }
    }
    .title {
      font-weight: 500;
      font-size: 25px;
      padding: 20px 10px;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 12px;
  border-radius: 14px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid;
  color: rgb(51, 51, 51);
  background-color: transparent;
  transition: all 0.3s ease 0s;
  width: auto;
  min-width: 50%;

  &:focus {
    outline: none;
    border-color: blueviolet;
  }
`;

export const StyledSelect = styled.select`
  width: 50%;
  padding: 14px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  background-color: #f2f2f2;

  &:focus {
    outline: none;
    border-color: blueviolet;
  }

  & option {
    font-size: 16px;
    color: #333;
    background-color: #f2f2f2;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 12px;
  border-radius: 14px;
  font-size: 20px;
  border: none;
  font-family: initial;
  border-bottom: 1px solid;
  color: rgb(51, 51, 51);
  background-color: transparent;
  transition: all 0.3s ease 0s;
  width: auto;
  min-width: 50%;

  &:focus {
    outline: none;
    border-color: blueviolet;
  }
`;

type stepProps = {
  isSelected: boolean;
  isError: boolean;
};
export const StyledRegistrationStep = styled.div<stepProps>`
  display: flex;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  font-weight: 600;
  gap: 20px;
  cursor: pointer;
  .index {
    border: 1px solid;
    border-radius: 50%;
    min-width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2;
    color: white;
    background-color: ${(p) =>
      p.isError ? 'red' : p.isSelected ? 'blueviolet' : '#343434'};
  }
  .line {
    position: absolute;
    width: 3px;
    height: 110px;
    left: 12px;
    background-color: black;
    z-index: 0;
  }
  .text {
    .value {
      font-weight: 400;
      font-size: 12px;
      padding: 10px;
      text-align: center;
      max-height: 30px;
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
    }
  }
`;

export const Error = styled.p`
  font-size: 14px;
  color: #f00;
  font-weight: 600;
`;

export const Success = styled.p`
  font-size: 14px;
  color: green;
  font-weight: 600;
`;
