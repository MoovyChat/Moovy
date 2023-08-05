import styled, { keyframes } from 'styled-components';

export const StyledAdminDatabase = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 10px;
  max-height: 96dvh;
  .ErrorMessage,
  .SuccessMessage {
    transition: color 0.3s ease, opacity 0.3s ease;
  }
  .database-options {
    display: flex;
    width: 95%;
    gap: 30px;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
    box-shadow: 0 0 1px;
    padding: 10px;
    min-height: 20px;
    z-index: 1;
    :hover {
      box-shadow: inset 0px -1px 4px;
      cursor: pointer;
    }
    &::-webkit-scrollbar {
      display: none; /* For Chrome, Safari and Opera */
    }
    .table-title {
      font-size: 14px;
      text-wrap: nowrap;
      cursor: pointer;
      transition: all 0.3s;
      :hover {
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        text-shadow: rgb(255 255 255) 1px 1px 2px; /* Add text shadow on hover */
      }
    }
  }
  .data-container {
    max-height: 600px;
    z-index: 1;
  }
`;

interface TableProps {
  isSorted: boolean;
}

export const StyledTH = styled.th<TableProps>`
  z-index: 1;
  background-color: ${props => (props.isSorted ? '#461c6d' : '#3f51b5')};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  box-shadow: 0px 0px 16px 2px rgba(157, 163, 180, 0.5);
  background-color: #2a2a2e;
  z-index: 1;
  th,
  td {
    padding: 15px 20px;
    text-align: left;
    border: none;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }

  th {
    color: white;
    position: sticky;
    top: 0;
    z-index: 2;
    cursor: pointer;
  }

  tbody tr {
    transition: all 0.25s ease-in-out;
  }

  tbody tr:nth-child(even) {
    background-color: #3a3a3f;
  }

  tbody tr:hover {
    background-color: #44444f;
    transform: scale(1.02);
    box-shadow: 0px 0px 16px 2px rgba(157, 163, 180, 0.5);
  }
`;

export const TableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px;
  width: 96%;
  z-index: 1;
`;

export const OperationsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  z-index: 1;
`;

interface ButtonProps {
  delete?: boolean;
}
export const OperationButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.delete ? '#ff4040' : '#3f51b5')};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => (props.delete ? '#ff6060' : '#536dfe')};
  }

  &:active {
    background-color: ${props => (props.delete ? '#ff4040' : '#3f51b5')};
  }
`;

export const SelectedRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
  margin-top: 20px;
  width: 96%;
  .selected-row-header {
    display: flex;
    gap: 50px;
    width: 95%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SelectedRowTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  box-shadow: 0px 0px 16px 2px rgba(157, 163, 180, 0.5);
  background-color: #2a2a2e;
  color: #fff;
  margin-top: 20px;
  font-size: 12px;
  th,
  td {
    padding: 15px 20px;
    border: none;
    text-align: left;
    white-space: normal;
  }

  th {
    background-color: #3f51b5;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  tbody tr {
    transition: all 0.25s ease-in-out;
  }

  tbody tr:nth-child(even) {
    background-color: #3a3a3f;
  }

  tbody tr:hover {
    background-color: #44444f;
    transform: scale(1.02);
    box-shadow: 0px 0px 16px 2px rgba(157, 163, 180, 0.5);
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 95%;
  z-index: 1;
  h2 {
    color: #fff;
    font-size: 24px;
  }
`;

export const TableActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledTableButton = styled.button`
  background-color: #1a1a1a;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3a3a3a;
  }
  svg {
    font-size: 16px;
  }
`;

export const EmptyMessage = styled.div`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    background-color: #1a1a1a;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #3a3a3a;
    }
    svg {
      font-size: 16px;
    }
  }
  span {
    color: #fff;
    font-size: 16px;
  }
`;

export const EditTextArea = styled.textarea`
  width: 90%;
  min-height: 30px;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #888;
  background: transparent;
  color: #ffffff;
  resize: none;
  transition: all 0.25s linear;

  &:focus {
    border-bottom: 2px solid #66afe9;
    outline: 0;
  }

  &::placeholder {
    color: #999;
  }
`;

export const FixedColumn = styled.th`
  width: 200px;
  text-align: left;
`;

export const SqlTextArea = styled.textarea`
  width: 95%;
  min-height: 100px;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #2a2a2e;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
`;

const fadein = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeout = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const ErrorMessage = styled.div`
  color: #721c24;
  width: 95%;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-sizing: border-box;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 9.5s;
  opacity: 1;
  transition: opacity 0.5s;
`;

export const SuccessMessage = styled.div`
  color: #000000;
  width: 95%;
  background-color: #00ff6a;
  border-color: #c6f5cb;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-sizing: border-box;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 9.5s;
  opacity: 1;
  transition: opacity 0.5s;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
  font-size: 1em;
  color: white;
  text-align: right;
  padding-right: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  color: white;
  border: none;
  border-bottom: 2px solid #ccc;
  background: none;
  width: 100%;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-bottom: 2px solid #007bff;
  }
`;
