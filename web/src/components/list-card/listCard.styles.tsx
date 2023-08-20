import styled from 'styled-components';
import { glassmorphism } from '../../utils/mixins';

export const StyledListCard = styled.div`
  position: relative;
  width: 80%;
  margin: 20px 0px;
  padding-top: 10px;
  padding-bottom: 15px;
  ${glassmorphism}
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    .item {
      display: flex;
      flex-direction: column;
      .title {
        font-weight: 600;
        :hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .count {
        font-size: 0.7em;
        opacity: 0.8;
      }
    }
  }
  .heading {
    display: flex;
    height: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    .sub {
      padding-left: 10px;
    }
  }
`;
