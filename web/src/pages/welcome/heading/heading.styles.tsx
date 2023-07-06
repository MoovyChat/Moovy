import styled from 'styled-components';

export const StyledHeading = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  font-family: Poppins;
  .slider-header {
    font-size: 4rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;

    @media (min-width: 768px) {
      /* md: in Tailwind */
      font-size: 4rem;
      line-height: 1.25;
    }
  }
  .slider-header-content {
    font-size: 3rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 640px) {
      /* sm: in Tailwind */
      line-height: 1.625;
    }
  }
`;
