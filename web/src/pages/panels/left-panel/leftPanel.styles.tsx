import styled from 'styled-components';
import { glassmorphism } from '../../../utils/mixins';
import { NavLink } from 'react-router-dom';

export const LeftParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  > .left-parent-options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    margin: 20px 0;
    margin-right: 20px;
    ${glassmorphism}

    .active {
      transition: all 1s;
      background-color: ${p => p.theme.divHoverColor};
      .icon {
        svg {
          height: 27px;
          width: 27px;
        }
      }
      .icon.feed {
        svg {
          fill: red;
        }
      }
      .icon.catalog {
        svg {
          fill: #ff7b00;
        }
      }
      .icon.p {
        svg {
          fill: #3db847;
        }
      }
      .icon.favorites {
        svg {
          fill: #ff0000;
        }
      }
      .icon.comments {
        svg {
          fill: #6a30ac;
        }
      }
      .icon.replies {
        svg {
          fill: #478887;
        }
      }
      .icon.notifications {
        svg {
          fill: #426bda;
        }
      }
      .icon.nests {
        svg {
          fill: #da214f;
        }
      }
      .panel-text {
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  color: inherit;
  text-decoration: none;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .panel-text {
    font-weight: 600;
  }
`;

export const StyledLinks = styled.div`
  flex-wrap: wrap;
  width: 80%;
  font-size: 10px;
  line-height: 15px;
  color: #71767b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  > div {
    cursor: pointer;
    color: white;
    :hover {
      text-decoration: underline;
    }
  }
`;
