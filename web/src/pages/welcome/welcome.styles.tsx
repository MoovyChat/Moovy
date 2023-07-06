import styled from 'styled-components';

export const WelcomeParent = styled.div`
  display: flex;
  width: 99vvw;
  flex-direction: column;
  overflow: hidden;

  @keyframes fillBox {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const StyledFlaps = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .social-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;
    padding: 5px;
    background: ${p => p.theme.trendingTiles};
    box-shadow: 0 0 4px ${p => p.theme.toggleBorder};
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    height: 40%;
    .social {
      cursor: pointer;
      border: none;
      background: none;
      text-decoration: none;
      color: inherit;
      font-family: inherit;
      :hover {
        transform: scale(1.3);
        transition: transform 0.5s;
      }
      :active {
        transform: scale(1);
        transition: transform 0.2s;
      }
    }
  }
`;

export const SocialEmbed = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;

  .twitter-timeline-container {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .instagram-feed {
    /* Add any styles needed for the Instagram feed */
    .rsme-instagram-embed {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  /* Styles for devices with max width of 768px */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    .twitter-timeline-container {
      width: 100%;
    }

    .instagram-feed {
      /* Add any mobile-specific styles needed for the Instagram feed */
    }
  }
`;

export const StyledFAQ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;
