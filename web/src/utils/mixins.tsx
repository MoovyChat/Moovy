import { css } from 'styled-components';

export const glassmorphism = css`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(15px) saturate(125%); /* Increased blur and added saturation for deeper effect */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
    /* Soft shadow for depth */ 0 2px 10px rgba(0, 0, 0, 0.1),
    /* Closer soft shadow for refined depth */ 0 0 0 1px
      rgba(255, 255, 255, 0.1); /* Edge light reflection */

  border: 1px solid rgba(255, 255, 255, 0.2); /* Soft border for light reflection on edges */

  @media (prefers-color-scheme: dark) {
    background: rgba(10, 10, 10, 0.08);
    border: 1px solid rgba(10, 10, 10, 0.2);
  }
`;
