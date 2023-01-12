import styled from 'styled-components';

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .logo {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .refetch {
    padding: 10px 15px;
    border-radius: 18px;
    box-shadow: 0 0 4px, inset 0 0 3px;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 5px, inset 0 0 5px;
    }
  }
  .text {
    padding: 15px 20px;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    opacity: 0.8;
  }
  .err {
    color: #781313;
  }
`;
