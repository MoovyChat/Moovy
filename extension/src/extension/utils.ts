import { sliceSetToolTipMessage, sliceSetTooltipVisible } from "../redux/slices/tooltip/tooltipSlice";

import { store } from "../redux/store";

export function getSupportedMimeTypes(
  media: string,
  types: string[],
  codecs: string[]
) {
  const isSupported = MediaRecorder.isTypeSupported;
  const supported: string[] = [];
  types.forEach((type: string) => {
    const mimeType = `${media}/${type}`;
    codecs.forEach((codec) => {
      const variation = `${mimeType};codecs=${codec}`;
      if (isSupported(variation)) supported.push(variation);
    });
    if (isSupported(mimeType)) supported.push(mimeType);
  });
  return supported;
}

export const randomUserNameGenerator = (nickname: string) => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const truncatedNickname = nickname.slice(0, 4);
  const paddingLength =
    8 - truncatedNickname.length - randomNumber.toString().length;
  const padding = Array(paddingLength).fill('0').join('');
  return `${truncatedNickname}${padding}${randomNumber}`;
};


export const handleMouseEnter: any =
  (label: string) => () => {
    store.dispatch(sliceSetTooltipVisible(true));
    store.dispatch(sliceSetToolTipMessage(label));
  };
  
export const handleMouseLeave: any =
  (label: string) => () => {
    store.dispatch(sliceSetTooltipVisible(false));
    store.dispatch(sliceSetToolTipMessage(label));
  };