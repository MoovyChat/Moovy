export const fileSizeConverter = (size: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${parseFloat((size / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};

export const resolutions: { [key: string]: { height: number; width: number } } =
  {
    '360p': { height: 480, width: 360 },
    '480p': { height: 480, width: 858 },
    '720p, HD': { height: 720, width: 1280 },
    '1080p,FHD': { height: 1080, width: 1920 },
    '2K, QHD': { height: 1440, width: 2560 },
    '4K, UHD': { height: 2160, width: 3840 },
  };

export const durations: { [key: string]: number } = {
  '10sec': 10,
  '30sec': 30,
  '1min': 60,
  '2min': 120,
  '3min': 180,
  '4min': 240,
};

export const videoFormats = {
  webm: 'video/webm',
  'x-matroska': 'video/x-matroska',
  mp4: 'video/mp4',
};

export const codecs = {
  none: '',
  vp8: ';codecs=vp8',
  vp9: ';codecs=vp9',
  h264: ';codecs=h264',
  opus: ';codecs=opus',
  pcm: ';codecs=pcm',
};
