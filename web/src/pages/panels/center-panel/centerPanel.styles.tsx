import styled from 'styled-components';
import { glassmorphism } from '../../../utils/mixins';

export const CenterParent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100% - 50px);
  width: 50vw;
  ${glassmorphism}
  overflow: hidden;
`;
