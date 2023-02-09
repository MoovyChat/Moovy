import { useEffect } from 'react';

type props = {};
const Ads: React.FC<props> = ({}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: 'ca-pub-9130373677797190',
        enable_page_level_ads: true,
      });
    };
    document.head.appendChild(script);
  }, []);
  return <div id='adsense-ad'></div>;
};

export default Ads;
