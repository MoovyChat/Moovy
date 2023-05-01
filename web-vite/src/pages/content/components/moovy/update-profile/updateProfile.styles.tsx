import styled from 'styled-components';
type props = {
  accentColor: string;
  visible?: boolean;
};
export const ParentProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Convergence', sans-serif;
  width: 99%;
  height: 100%;
  background-color: ${(p) => p.theme.chatBody};
  overflow: hidden;
  .logo {
    width: 30%;
    margin-top: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const C_O_L_O_R = '#1b86a7';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const StepContainer = styled.div<props>`
  display: ${(p) => (p.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .progress-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: ${(p) => p.theme.chatText};
      color: ${C_O_L_O_R};
      border: 2px solid #ccc;
      font-size: 1rem;
      font-weight: bold;
      z-index: 1;
    }

    .line {
      flex: 1;
      height: 2px;
      background-color: ${(p) => p.theme.chatText};
      margin: 0 1rem;
      z-index: 0;
    }

    .line.active {
      background-color: ${C_O_L_O_R};
    }

    .circle.active {
      background-color: ${C_O_L_O_R};
      color: ${(p) => p.theme.chatText};
    }
  }
`;

export const FieldContainer = styled.div<props>`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  width: 20rem;
  height: 3rem;
  font-size: 14px;

  .input,
  select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #e1e5ee;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 1.25rem;
    background: none;

    &::placeholder {
      font-size: 10px;
    }

    &:hover {
      border-color: ${C_O_L_O_R};
    }

    /* Change border when input focus*/

    &:focus {
      border-color: ${C_O_L_O_R};
    }

    &:focus ~ .label,
    &:not(:placeholder-shown):valid ~ .label,
    &:not(:placeholder-shown):not(:focus) ~ .label {
      top: -0.5rem;
      font-size: 0.8rem;
      left: 0.8rem;
    }
  }
  select {
    height: auto !important;
    width: 113% !important;
  }
  .input.error {
    border-color: red;
    animation: shake 0.5s;
  }
  .error {
    position: absolute;
    left: 1rem;
    bottom: -5.6rem;
    font-size: 12px;
    color: red;
    ::before {
      content: '⚠ ';
    }
  }

  .label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5rem;
    color: ${(p) => p.theme.chatText};
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: ${(p) => p.theme.chatBody};
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-0.5rem);
    }
    40% {
      transform: translateX(0.5rem);
    }
    60% {
      transform: translateX(-0.5rem);
    }
    80% {
      transform: translateX(0.5rem);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const TextArea = styled.textarea<props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #e1e5ee;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  padding: 1.25rem;
  background: none;

  &::placeholder {
    font-size: 10px;
  }

  &:hover {
    border-color: ${C_O_L_O_R};
  }

  /* Change border when textarea focus*/

  &:focus {
    border-color: ${C_O_L_O_R};
  }

  &:focus ~ .label,
  &:not(:placeholder-shown):valid ~ .label,
  &:not(:placeholder-shown):not(:focus) ~ .label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }

  &:hover::before {
    width: 400px;
    height: 400px;
  }

  &:hover {
    background-color: #0076b3;
  }

  &:active::before {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  max-width: 500px;
  gap: 10px;
  margin-top: 70px;
`;

export const BackButton = styled.button`
  position: relative;
  display: inline-block;
  background-color: #959595;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }

  &:hover::before {
    width: 400px;
    height: 400px;
  }

  &:hover {
    background-color: #636363;
  }

  &:active::before {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const SuccessMessage = styled.div`
  color: green;
  margin-top: 30px;
  font-size: 24px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 30px;
  font-size: 24px;
`;
