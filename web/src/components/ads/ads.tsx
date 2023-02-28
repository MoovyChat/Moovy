import { useEffect } from 'react';

type props = {};
const Ads: React.FC<props> = ({}) => {
  useEffect(() => {
    const installGoogleAds = () => {
      const elem = document.createElement('script');
      elem.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      elem.async = true;
      elem.defer = true;
      document.body.insertBefore(elem, document.body.firstChild);
    };
    installGoogleAds();
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []);
  return (
    <div id='adsense-ad'>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-5406977689017300'
        data-ad-slot='12121212'
        data-ad-format='auto'
      />
    </div>
  );
};

export default Ads;
