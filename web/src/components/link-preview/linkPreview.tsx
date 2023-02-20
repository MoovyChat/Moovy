import { LinkPreview, useGetLinkPreviewQuery } from '../../generated/graphql';
import { MdPlayCircle, MdPlayCircleOutline } from 'react-icons/md';
import React, { useEffect, useState } from 'react';

import { Image } from '../Image/image';
import { StyledLinkPreview } from './linkPreview.styles';
import { isServer } from '../../constants';
import url from 'url';
import useFetchLink from '../../hooks/useFetchLink';

type props = {
  text: string;
};
const LinkPreviewComponent: React.FC<props> = ({ text }) => {
  const link = useFetchLink(text);
  const [domainName, setDomain] = useState<string>('');
  const [clickedPlay, isPlayClicked] = useState<boolean>(false);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [videoType, setVideoType] = useState<string>('');
  const [linkData, setLinkPreview] = useState<LinkPreview | null>(null);
  const [fetchLinkPreview] = useGetLinkPreviewQuery({
    variables: { url: link! },
    pause: isServer() && link === null,
  });

  useEffect(() => {
    if (link === null) return;
    const { error, fetching, data } = fetchLinkPreview;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getLinkPreview!;
      setLinkPreview(_data);
      setIsVideo(_data.isVideo!);
      setVideoSrc(_data.videoSrc!);
      setVideoType(_data.videoType!);
      console.log(_data);
    }
  }, [fetchLinkPreview]);

  useEffect(() => {
    if (!link) return;
    let domain = url.parse(link).hostname?.replace('www.', '');
    if (domain) {
      domain = domain.charAt(0).toUpperCase() + domain.slice(1);
      setDomain(domain);
    }
  }, [link]);

  if (!linkData || !linkData?.image || !link)
    return <React.Fragment></React.Fragment>;
  return (
    <StyledLinkPreview
      onClick={(e) => {
        e.stopPropagation();
        // link && !isVideo && window.open(link, '_open');
        link && window.open(link, '_open');
      }}>
      {!clickedPlay ? (
        <>
          <div
            className='link-image'
            onClick={(e) => {
              e.stopPropagation();
              // isVideo
              //   ? isPlayClicked(true)
              //   : link && window.open(link, '_open');
              link && window.open(link, '_open');
            }}>
            <Image
              src={linkData.image as string}
              alt='link-image'
              className='link-img'
            />
            {/* {isVideo && (
              <div className='play-btn'>
                <MdPlayCircle fill='#ff2600' size={20} />
                <span>Play</span>
              </div>
            )} */}
          </div>
          <div
            className='link-data'
            onClick={(e) => {
              e.stopPropagation();
              link && window.open(link, '_open');
            }}>
            <div className='link-title'>{domainName}</div>
            <div className='link-desc'>{linkData.title}</div>
            <div className='link-sub'>{linkData.description}</div>
          </div>
        </>
      ) : (
        <>
          <video
            playsInline
            controlsList='nodownload'
            src={`blob:https://www.youtube.com/eeea81f0-9c92-42fe-a22a-51af1e82734f`}>
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </StyledLinkPreview>
  );
};

export default LinkPreviewComponent;
