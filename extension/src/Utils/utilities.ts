import { textMap } from './interfaces';
import { textMapTypes } from '../constants';

const isNumber = (c: string) => {
  let parsedInt = parseInt(c);
  if (isNaN(parsedInt)) return false;
  else return true;
};

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

export const getFormattedWordsArray = (text: string): textMap[] => {
  const words = text.split(' ');
  const result: textMap[] = [];

  let currentBasicWords: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.startsWith('@')) {
      result.push({ message: word, type: textMapTypes.USER });
      currentBasicWords = [];
    } else if (/^\d+(:\d+){0,2}$/.test(word)) {
      result.push({ message: word, type: textMapTypes.TIME });
      currentBasicWords = [];
    } else {
      currentBasicWords.push(word);

      if (
        i === words.length - 1 ||
        words[i + 1].startsWith('@') ||
        /^\d+(:\d+){0,2}$/.test(words[i + 1])
      ) {
        result.push({
          message: currentBasicWords.join(' '),
          type: textMapTypes.BASIC,
        });
        currentBasicWords = [];
      }
    }
  }

  return result;
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

export const createRange = (
  node: Node | null,
  chars: { count: number },
  range?: Range
): Range | undefined => {
  if (!node) return;
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }
  if (chars.count === 0) {
    range.setEnd(node, chars.count);
  } else if (node && chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent!.length < chars.count) {
        chars.count -= node.textContent!.length;
      } else {
        range.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (var lp = 0; lp < node.childNodes.length; lp++) {
        range = createRange(node.childNodes[lp], chars, range);
        if (chars.count === 0) {
          break;
        }
      }
    }
  }

  return range;
};

export function setCurrentCursorPosition(
  chars: number,
  element: HTMLDivElement
) {
  if (chars >= 0) {
    var selection = window.getSelection();
    let range = createRange(element.parentNode, { count: chars });
    if (range && selection) {
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}

export function setCaret(ele: HTMLElement | null, line: any, col: any) {
  var rng = document.createRange();
  var sel = window.getSelection();
  if (sel && ele) {
    rng.setStart(ele.childNodes[0], col);
    rng.collapse(true);
    sel.removeAllRanges();
    sel.addRange(rng);
    ele.focus();
  }
}
