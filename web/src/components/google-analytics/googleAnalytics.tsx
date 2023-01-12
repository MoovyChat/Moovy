import React, { useEffect } from 'react';

import ReactGA from 'react-ga';

const GoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize('G-N7MNCE11FQ');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <></>;
};

export default GoogleAnalytics;
