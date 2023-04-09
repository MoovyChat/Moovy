import 'react-image-crop/dist/ReactCrop.css';

import React, { Dispatch, useState } from 'react';
import ReactCrop, { PixelCrop, centerCrop } from 'react-image-crop';

import { Crop } from 'react-image-crop';
import { makeAspectCrop } from 'react-image-crop';

type props = {
  url: string;
  setCompletedCrop: Dispatch<React.SetStateAction<PixelCrop | undefined>>;
  imageRef: any;
  aspect: number;
};
const ImageCrop: React.FC<props> = ({
  url,
  setCompletedCrop,
  imageRef,
  aspect,
}) => {
  const [crop, setCrop] = useState<Crop>();
  const centerAspectCrop = (
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) => {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  };
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  return (
    <ReactCrop
      crop={crop}
      onChange={(_, percentCrop) => {
        setCrop(percentCrop);
      }}
      onComplete={(c) => {
        setCompletedCrop(c);
      }}
      aspect={aspect}>
      <img alt='image-crop' src={url} onLoad={onImageLoad} ref={imageRef} />
    </ReactCrop>
  );
};

export default ImageCrop;
