import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { G_TRACKING_ID } from '../constants';

const usePageView = () => {
  useEffect(() => {
    ReactGA.initialize(G_TRACKING_ID);
    ReactGA.pageview(window.location.pathname);

    return () => {
      // Clean up the ReactGA instance on unmount
      ReactGA.ga('remove');
    };
  }, []);
};

export default usePageView;
