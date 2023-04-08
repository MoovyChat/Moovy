import styled from 'styled-components';

export const DeleteCommentParent = styled.div`
  padding: 20px 5px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .heading {
    font-size: 20px;
    font-weight: 600;
  }
  .sub {
    font-size: 0.8em;
    margin-top: 10px;
    width: 50%;
    text-align: center;
    opacity: 0.8;
  }
  .delete-cancel {
    margin: 30px 0;
    display: flex;
    gap: 15px;
    .del,
    .cancel {
      padding: 10px 20px;
      border-radius: 18px;
      font-size: 12px;
      box-shadow: 0 0 10px;
      transition: all 0.4s;
      cursor: pointer;
      :hover {
        transform: scale(1.05);
      }
      :active {
        transform: scale(0.95);
      }
    }
    .del {
      background-color: #ce1515;
      color: white;
      box-shadow: 0 0 5px
        ${(p) => (p.theme.themeType === 'light' ? 'black' : 'white')};
    }
    .cancel {
    }
  }
`;
