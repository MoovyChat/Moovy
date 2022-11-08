import styled from 'styled-components';

export const HeaderParent = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 40px;
  max-height: 60px;
  justify-content: flex-end;
  font-family: 'Prompt', sans-serif;
  padding: 15px 0px;
  backdrop-filter: blur(10px);
  .header-buttons {
    display: flex;
    position: relative;
    align-self: flex-end;
    float: right;
    .hb {
      :hover {
        border: 1px solid;
      }
    }
    .toggle-theme {
      input {
        width: 0;
        height: 0;
        visibility: hidden;
        :checked + label {
          background: #242424;
          ::after {
            transform: translateX(100%);
            background: linear-gradient(180deg, #777, #3a3a3a);
          }
        }
        :checked + label .sun {
          fill: #000;
        }
        :checked + label .moon {
          fill: #fff;
        }
      }
      label {
        width: 80px;
        height: 40px;
        position: relative;
        display: block;
        background: #ebebeb;
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
          inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: all 0.5s;
        overflow: hidden;
        .sun {
          position: absolute;
          z-index: 1;
          top: 6px;
          left: 8px;
        }
        .moon {
          position: absolute;
          z-index: 1;
          top: 6px;
          right: 8px;
        }
        :active:after {
          width: 45px;
        }
        :after {
          content: '';
          height: 40px;
          width: 40px;
          position: absolute;
          top: 0;
          left: 0px;
          background: linear-gradient(180deg, #ffcc89, #d8860b);
          border-radius: 180px;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.5s;
        }
      }
    }
  }
  .header {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/qc.png?alt=media&token=f1b435bb-446b-4ea9-8c3c-9084a35397e1');
    height: 40px;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export const HeaderButton = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  /* background: linear-gradient(purple, black); */
`;
