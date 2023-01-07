import { MdEdit, MdOutlineSave } from 'react-icons/md';
import {
  getStoredBlobURL,
  getStoredResolution,
  getStoredVideoDuration,
  getStoredVideoFormat,
} from '../storage';
import { useEffect, useRef, useState } from 'react';

import OptionsHeader from '../header/header';
import { OptionsMain } from './optionsHome.styles';
import { fileSizeConverter } from '../utils';

const OptionsHome = () => {
  const [blobUrls, setBlobUrl] = useState<string[]>([]);
  const [b, setB] = useState<string>('');
  const [fileName, setFileName] = useState<string>('qchat');
  const [blob, setBlob] = useState<Blob>();
  const [resolution, setResolution] = useState<string>('');
  const [duration, setDuration] = useState<number>(0);
  const [format, setFormat] = useState<string>('video/webm');
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    getStoredBlobURL().then(async (blobURL) => {
      setBlobUrl(blobURL);
      const mediaBlob = await fetch(blobURL[0]).then((response) =>
        response.blob()
      );
      setBlob(mediaBlob);
      const myFile = new File([mediaBlob], 'demo.mp4', { type: 'video/webm' });
      var url = URL.createObjectURL(myFile);
      setB(url);
    });

    getStoredResolution().then((res) => setResolution(res));
    getStoredVideoFormat().then((res) => setFormat(res));
  }, [b]);

  useEffect(() => {
    let durationChangeHandler = () => {
      setDuration(videoRef?.current?.duration!);
    };
    videoRef?.current?.addEventListener(
      'durationchange',
      durationChangeHandler
    );
    return () => {
      videoRef?.current?.removeEventListener(
        'durationchange',
        durationChangeHandler
      );
    };
  }, [videoRef?.current]);

  const saveToDisk: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    var link = document.createElement('a'); // Or maybe get it from the current document
    link.href = b;
    link.download = `${fileName}.webm`;
    link.innerHTML = 'Click here to download the file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <OptionsMain>
      <OptionsHeader className='header' />
      <div className='video-container'>
        <video autoPlay controls loop ref={videoRef} preload='metadata'>
          {b && <source src={b} type={format} />}
          Your browser does not support the video tag.
        </video>
        <div className='attributes'>
          <div className='name field'>
            <div className='title'>Title</div>
            <div className='value in'>
              <div className='parent'>
                <MdEdit size={20} className='icon' />
                <input
                  type='text'
                  value={fileName}
                  maxLength={25}
                  onChange={(e) => {
                    e.stopPropagation();
                    setFileName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className='size field'>
            <div className='title'>Size</div>
            <div className='value'>{fileSizeConverter(blob?.size!)}</div>
          </div>
          <div className='type field'>
            <div className='title'>Type</div>
            <div className='value'>{blob?.type}</div>
          </div>
          <div className='resolution field'>
            <div className='title'>Resolution</div>
            <div className='value'>{resolution}</div>
          </div>
          <div className='duration field'>
            <div className='title'>Duration</div>
            <div className='value'>{duration} sec</div>
          </div>
          <div className='save' onClick={saveToDisk}>
            <MdOutlineSave size={20} className='icon' fill='#39d7ecf4' />
            <span className='disk'>Save to disk</span>
          </div>
        </div>
      </div>
    </OptionsMain>
  );
};

export default OptionsHome;
