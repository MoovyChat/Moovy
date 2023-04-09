// Importing DOMPurify and HtmlParser to clean and parse HTML text
// Importing lazy from React to use lazy loading for components
// Importing textMap and textMapTypes from interfaces and constants files

import DOMPurify from 'dompurify';
import HtmlParser from 'react-html-parser';
import { lazy } from 'react';
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

// Check if the string can be parsed to a number
export const isNumber = (c: string) => {
  let parsedInt = parseInt(c);
  if (isNaN(parsedInt)) return false;
  else return true;
};

// Format a number to a compact representation with one decimal
export const getFormattedNumber = (count: number) => {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(count);
};

// Get a date in long format, e.g. Monday, March 1, 2021, 10:30:15 AM GMT+2
export const getDateFormat = (time: string | undefined) => {
  if (!time) return;
  let intTimeFormat = parseInt(time);
  let intlFormat = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(intTimeFormat);
  return intlFormat.toString();
};

// Get a date in short format, e.g. Mar 1, 2021
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

// Split a text string into an array of text maps, where each text map has a message and a type property
export const getFormattedWordsArray = (text: string): textMap[] => {
  return text.split(' ').map(word => {
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

// Function to parse and sanitize HTML text
// Uses regular expression to match links and replaces with HTML a elements
// Adds a hook to make all links open a new window
export const ParsedText = (text: string) => {
  // Use a regular expression to match the links
  const linkRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;

  // Replace the links with HTML a elements
  const linkText = text.replace(linkRegex, link => {
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

  // Sanitize the cleaned HTML text using the allowed tags and additional attributes
  let clean = DOMPurify.sanitize(linkText, {
    ALLOWED_TAGS: ['a'],
    ADD_ATTR: ['target'],
  });

  // Parse the sanitized HTML text into a React component
  return HtmlParser(clean);
};

// Function to compress image using HTML5 Canvas API
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
        blob => {
          if (blob) resolve(blob);
          else reject(null);
        },
        'image/jpeg',
        0.5,
      );
    };
  });
}

// Function to generate a random username by appending a random number to the provided nickname
export const randomUserNameGenerator = (nickname: string) => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const truncatedNickname = nickname.slice(0, 4);
  const paddingLength =
    8 - truncatedNickname.length - randomNumber.toString().length;
  const padding = Array(paddingLength).fill('0').join('');
  return `${truncatedNickname}${padding}${randomNumber}`;
};
