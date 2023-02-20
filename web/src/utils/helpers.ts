import * as DOMPurify from 'dompurify';

import HtmlParser from 'react-html-parser';
import { textMap } from './interfaces';
import { textMapTypes } from '../constants';

const algorithm = 'aes-256-cbc';
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
      finalString = `${getShortDateFormat(postTime)}`;
    }
  } else {
    finalString = `${getShortDateFormat(postTime)}`;
  }
  return finalString;
};

export const isNumber = (c: string) => {
  let parsedInt = parseInt(c);
  if (isNaN(parsedInt)) return false;
  else return true;
};

export const colorLog = (...args: any) => {
  console.log(`%c[qchat]`, 'color: #00d9ff', ...args);
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

export const getFormattedWordsArray = (text: string): textMap[] => {
  return text.split(' ').map((word) => {
    if (word.startsWith('@')) {
      return { message: word, type: textMapTypes.USER };
    } else if (word.includes(':')) {
      let words = word.split(':');
      let hours = words.length === 3 ? words[0] : '0';
      let minutes = hours !== '0' ? words[1] : words[0];
      let seconds = hours !== '0' ? words[2] : words[1];
      if (isNumber(hours) && isNumber(minutes) && isNumber(seconds)) {
        return { message: word, type: textMapTypes.TIME };
      } else {
        return { message: word, type: textMapTypes.BASIC };
      }
    } else {
      return { message: word, type: textMapTypes.BASIC };
    }
  });
};

export const ParsedText = (text: string) => {
  // Use a regular expression to match the links
  const linkRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;

  // Replace the links with HTML a elements
  const linkText = text.replace(linkRegex, (link) => {
    return `<a href="${link}" target='_blank'>${link}</a>`;
  });

  // Add a hook to make all links open a new window
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    // set all elements owning target to target=_blank
    if ('target' in node) {
      node.setAttribute('target', '_blank');
    }
    // set non-HTML/MathML links to xlink:show=new
    if (
      !node.hasAttribute('target') &&
      (node.hasAttribute('xlink:href') || node.hasAttribute('href'))
    ) {
      node.setAttribute('xlink:show', 'new');
    }
  });
  let clean = DOMPurify.sanitize(linkText, {
    ALLOWED_TAGS: ['a'],
    ADD_ATTR: ['target'],
  });
  return HtmlParser(clean);
};

export async function compressImage(inputBlob: Blob): Promise<Blob | null> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = URL.createObjectURL(inputBlob);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(null);
        },
        'image/jpeg',
        0.5
      );
    };
  });
}
