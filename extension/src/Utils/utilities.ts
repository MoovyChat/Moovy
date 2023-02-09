import { textMap, timeMessage } from './interfaces';

import { Dispatch } from 'redux';
import { msgPlace } from './enums';
import { textMapTypes } from '../constants';

// Calculates the time between current time and the user's comment
export const getTimeFrame = (postTime: string) => {
  let currentTime = Date.now();
  let diff = currentTime - parseInt(postTime);

  // Conversion to minutes/hour/day/year
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  const noOfYears = Math.round(diff / year);
  const noOfHours = Math.round(diff / hour);
  const noOfDays = Math.round(diff / day);
  const noOfMinutes = Math.round(diff / minute);

  let finalString = '';
  if (noOfYears === 0) {
    if (noOfDays === 0) {
      if (noOfHours === 0) {
        if (noOfMinutes === 0) {
          finalString = 'Just now';
        } else finalString = `${noOfMinutes}m`;
      } else {
        finalString = `${noOfHours}h`;
      }
    } else {
      finalString = `${noOfDays}d`;
    }
  } else {
    finalString = `${noOfYears}y`;
  }
  return finalString;
};

export const isNumber = (c: string) => {
  let parsedInt = parseInt(c);
  if (isNaN(parsedInt)) return false;
  else return true;
};

export const getFormattedWordsArray = (
  text: string,
  place: string,
  dispatch: Dispatch<any>,
  userId: string,
  commentTimeStamp: number
): textMap[] => {
  return text.split(' ').map((word) => {
    if (word.startsWith('@')) {
      return { message: word, type: textMapTypes.USER };
    } else if (word.includes(':')) {
      let words = word.split(':');
      let hours = words.length === 3 ? words[0] : '0';
      let minutes = hours !== '0' ? words[1] : words[0];
      let seconds = hours !== '0' ? words[2] : words[1];
      if (isNumber(hours) && isNumber(minutes) && isNumber(seconds)) {
        if (place === msgPlace.COMMENT_CARD) {
          // let timeMsgObj: timeMessage = {
          //   madeBy: userId,
          //   message: text,
          //   time: word,
          //   timeStamp: commentTimeStamp,
          // };
          // dispatch(sliceAddTimeMessages(timeMsgObj));
        }
        return { message: word, type: textMapTypes.TIME };
      } else {
        return { message: word, type: textMapTypes.BASIC };
      }
    } else {
      return { message: word, type: textMapTypes.BASIC };
    }
  });
};

export const getFormattedNumber = (count: number) => {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(count);
};

export const getDateFormat = (time: string | undefined) => {
  if (!time) return;
  let intTimeFormat = parseInt(time);
  let intlFormat = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(intTimeFormat);
  return intlFormat.toString();
};

// Date format: DD MMM YYYY
export const getShortDateFormat = (time: string | undefined) => {
  if (!time) return;
  let intTime = parseInt(time);
  let intlFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(intTime);
  return intlFormat.toString();
};

export const isImageURLValid = async (url: string) => {
  const img = new Image();
  img.src = url;
  return new Promise((resolve) => {
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
  });
};

export const makeDistortionCurve = (amount: any) => {
  let k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
};

export const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export function createPitchShiftCurve(pitch: number) {
  const n = 4096; // Number of samples in the curve
  const curve = new Float32Array(n);
  const amount = Math.pow(2, pitch / 12);
  for (let i = 0; i < n; ++i) {
    curve[i] = (i - n / 2) * amount;
  }
  return curve;
}
