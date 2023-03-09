import { AiFillDelete, AiOutlineCheckCircle } from 'react-icons/ai';

import styled from 'styled-components';

export const FullMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #333;
    width: 100%;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    padding: 16px;
    height: 100%;
    border-radius: 14px;

    .name {
      font-size: 24px;
      font-weight: 600;
      margin-right: 16px;
    }

    .time {
      font-size: 12px;
      font-weight: 600;
      opacity: 0.8;
      margin: 10px 0;
    }

    .message {
      flex: 1;
      font-size: 16px;
      line-height: 1.5;
      color: #c2c2c2;
      white-space: pre-line;
    }
  }
`;

type props = {
  read: boolean;
};
export const Container = styled.div<props>`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  background-color: ${(p) => !p.read && '#051f2a'};
  &:last-child {
    border-bottom: none;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-right: 10px;
`;

export const SenderWrapper = styled.div`
  flex: 1;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`;

export const MessageWrapper = styled.div`
  flex: 2;
  margin-right: 10px;
  font-size: 16px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  .icon-btn {
    padding: 10px;
    :hover {
      box-shadow: inset 0 0 5px;
      border-radius: 50%;
    }
  }
  .time {
    font-size: 12px;
    font-weight: 600;
    opacity: 0.8;
    margin: 10px 0;
  }
`;

export const OptionButton = styled.div`
  margin-left: 10px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;

  .dft-btn {
    align-items: center;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: #3c4043 0px 1px 2px 0px;
    color: #5f6368;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    line-height: 32px;
    padding: 0 12px;
    text-align: center;
  }
`;

export const CheckCircleIcon = styled(AiOutlineCheckCircle)`
  color: #28a745;
  margin-right: 5px;
  pointer-events: none;
`;

export const DeleteIcon = styled(AiFillDelete)`
  color: #dc3545;
  pointer-events: none;
  transition: all 300ms;
`;

export const StyledAdmin = styled.div`
  padding: 10px;
  background-color: rgb(32, 33, 36);
  height: auto;
  min-height: 100dvh;
  font-family: 'Convergence', sans-serif;
  .logo {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      object-fit: contain;
    }
  }
  .parent-container {
    display: flex;
    width: 100%;
    gap: 10px;
    .comments-container {
      flex: 1 1 70%;
      border-radius: 18px;
      overflow: hidden;
    }
    .full-message-container {
      flex: 1 1 30%;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #333333;
  border-bottom: 1px solid #ddd;

  .title {
    margin-right: 10px;
    font-weight: 600;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
