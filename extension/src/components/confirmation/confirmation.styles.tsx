import styled from 'styled-components';

export const StyledConfirmation = styled.div`
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, 0%);
  margin-left: auto;
  margin-right: auto;
  min-width: 20%;
  width: 250px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  background: ${(p) => p.theme.chatText};
  color: ${(p) => p.theme.chatBody};
  font-size: 1.2em;
  font-weight: 600;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  .confirm-message {
    padding: 10px;
    text-align: center;
    font-size: 14px;
  }
  .confirm-options {
    display: flex;
    flex-direction: column;
    .confirm {
      padding: 10px 20px;
      border-radius: 18px;
      font-size: 12px;
      transition: all 0.4s;
      cursor: pointer;
    }
    .report {
      background-color: #ce1515;
      color: white;
    }
  }
`;
