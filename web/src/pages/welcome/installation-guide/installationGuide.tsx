import React, { useEffect, useRef, useState } from 'react';

import { EXTENSION_URL } from '../../../constants';
import { GoCommentDiscussion } from 'react-icons/go';
import { IoExtensionPuzzleSharp } from 'react-icons/io5';
import MoovyLogo from '../../../svgs/moovy-white.svg';
import Step1 from '../../../static/gifs/step1.gif';
import Step2 from '../../../static/gifs/step2.gif';
import Step3 from '../../../static/gifs/step3.gif';
import Step4 from '../../../static/gifs/step4.gif';
import Step5 from '../../../static/gifs/step5.gif';
import { StyledInstallationGuide } from './installationGuide.styles';
import { useSpring } from '@react-spring/web';

type props = {
  id: string;
};
const InstallationGuide: React.FC<props> = ({ id }) => {
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [source, setSource] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        setIsVisible(top <= window.innerHeight * 0.8);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const animProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    switch (selectedOption) {
      case 1:
        setSource(() => Step1);
        break;
      case 2:
        setSource(() => Step2);
        break;
      case 3:
        setSource(() => Step3);
        break;
      case 4:
        setSource(() => Step4);
        break;
      case 5:
        setSource(() => Step5);
        break;
      default:
        setSource('');
        break;
    }
  }, [selectedOption]);
  return (
    <StyledInstallationGuide
      selectedOption={selectedOption}
      id={id}
      ref={ref}
      style={animProps}
    >
      <div className="steps">
        <div className="heading">Installation Guide</div>
        <div
          className="step one"
          onClick={e => {
            e.stopPropagation();
            setSelectedOption(1);
          }}
        >
          <p>1. Install MoovyChat</p>
          {selectedOption === 1 && (
            <div className="info">
              Install the Chrome extension from{' '}
              <a
                target="_blank"
                href={EXTENSION_URL}
                style={{ padding: '0 5px', fontSize: '16px', color: 'white' }}
              >
                here
              </a>
            </div>
          )}
        </div>
        <div
          className="step two"
          onClick={e => {
            e.stopPropagation();
            setSelectedOption(2);
          }}
        >
          <p>2. Pin "MoovyChat" to Chrome</p>
          {selectedOption === 2 && (
            <div className="info">
              Click on the
              <IoExtensionPuzzleSharp style={{ padding: '0 10px' }} />
              icon and pin the{' '}
              <img src={MoovyLogo} alt="logo" width={30} height={30} /> icon
            </div>
          )}
        </div>
        <div
          className="step three"
          onClick={e => {
            e.stopPropagation();
            setSelectedOption(3);
          }}
        >
          <p>3. Open your favorite show</p>
          {selectedOption === 3 && (
            <div className="info">Open your favorite show on Netflix</div>
          )}
        </div>
        <div
          className="step four"
          onClick={e => {
            e.stopPropagation();
            setSelectedOption(4);
          }}
        >
          <p>4. Login to MoovyChat</p>
          {selectedOption === 4 && (
            <div className="info">
              <span style={{ display: 'inline-block' }}>Click on the</span>
              <img
                src={MoovyLogo}
                alt="logo"
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  width: '30px',
                  height: '30px',
                }}
              />
              <span style={{ display: 'inline-block' }}>
                icon and Login with your Google account
              </span>
            </div>
          )}
        </div>
        <div
          className="step five"
          onClick={e => {
            e.stopPropagation();
            setSelectedOption(5);
          }}
        >
          <p>
            5. Click on{' '}
            <GoCommentDiscussion
              style={{
                padding: '0 10px',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />{' '}
            icon to open a chat window.
          </p>
          {selectedOption === 5 && (
            <div className="info">
              You will see{' '}
              <GoCommentDiscussion
                style={{
                  padding: '0 10px',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />{' '}
              icon after you installed the extension.
            </div>
          )}
        </div>
      </div>
      <div className="gif-container">
        <div className="gif">
          <img src={source} alt="ext" />
        </div>
      </div>
    </StyledInstallationGuide>
  );
};

export default InstallationGuide;
