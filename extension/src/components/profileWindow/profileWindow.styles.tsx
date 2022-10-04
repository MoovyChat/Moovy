import styled from 'styled-components';

export const ProfileParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  .header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    flex-shrink: 0;
    .profile {
      flex: 2;
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .detail {
      display: flex;
      flex-direction: column;
      flex: 8;
      justify-content: space-evenly;
      align-items: center;
      .info {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        .name {
          font-size: 2.8em;
          margin: 0 5px;
          flex: 2;
          display: flex;
          justify-content: flex-end;
          overflow-wrap: anywhere;
        }
        .clk-parent {
          display: flex;
          flex: 3;
          justify-content: flex-start;
          .follow {
            background: #00a3ff;
            color: white;
            font-weight: 650;
          }
          .clk {
            border: 1px solid;
            padding: 2px 15px;
            font-size: 1.2em;
            margin: 5px;
            :hover {
              cursor: pointer;
            }
          }
        }
      }
      .stats {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 50px;
        .section {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          .heading {
            font-weight: 700;
            font-size: 1.4em;
          }
          .count {
            font-weight: 600;
            font-size: 1.2em;
          }
        }
      }
    }
  }

  .feed {
    flex: 6;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    .toolbar {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 98%;
      .item {
        border-bottom: 1px solid;
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 1.7em;
        justify-content: center;
        align-items: center;
        :hover {
          cursor: pointer;
        }
      }
    }
    .list {
      flex: 9;
      width: 100%;
    }
  }
`;

type props = {
  profilePic: string;
};
export const ProfileImage = styled.div<props>`
  display: inline-block;
  height: 75px;
  width: 75px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  background: url('${(p) => p.profilePic}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const HiddenRadioButton = styled.input.attrs({
  type: 'radio',
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
`;

export const RadioButton = styled.span`
  ${HiddenRadioButton}:checked + && {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #03b3ff;
    box-shadow: inset -1px 0 1px black;
    font-weight: 600;
    color: white;
  }
`;
