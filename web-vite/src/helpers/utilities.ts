import emojiRegex from "emoji-regex";
import { textMap } from "./interfaces";
import { textMapTypes } from "./constants";

// Calculates the time between current time and the user's comment
export const getTimeFrame = (postTime: string) => {
  const currentTime = Date.now();
  const diff = currentTime - parseInt(postTime);

  // Conversion to minutes/hour/day/year
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  const noOfYears = Math.round(diff / year);
  const noOfHours = Math.round(diff / hour);
  const noOfDays = Math.round(diff / day);
  const noOfMinutes = Math.round(diff / minute);
  let finalString = "";
  if (noOfYears === 0) {
    if (noOfDays === 0) {
      if (noOfHours === 0) {
        if (noOfMinutes === 0) {
          finalString = "Just now";
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
  const words = text.split(" ");
  const result: textMap[] = [];

  let currentBasicWords: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.startsWith("@")) {
      result.push({ message: word, type: textMapTypes.USER });
      currentBasicWords = [];
    } else if (/^\d+(:\d+){0,2}$/.test(word)) {
      result.push({ message: word, type: textMapTypes.TIME });
      currentBasicWords = [];
    } else {
      currentBasicWords.push(word);

      if (
        i === words.length - 1 ||
        words[i + 1].startsWith("@") ||
        /^\d+(:\d+){0,2}$/.test(words[i + 1])
      ) {
        result.push({
          message: currentBasicWords.join(" "),
          type: textMapTypes.BASIC,
        });
        currentBasicWords = [];
      }
    }
  }

  return result;
};

export const getFormattedNumber = (count: number) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(count);
};

export const getDateFormat = (time: string | undefined) => {
  if (!time) return;
  const intTimeFormat = parseInt(time);
  const intlFormat = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(intTimeFormat);
  return intlFormat.toString();
};

// Date format: DD MMM YYYY
export const getShortDateFormat = (time: string | undefined) => {
  if (!time) return;
  const intTime = parseInt(time);
  const intlFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(intTime);
  return intlFormat.toString();
};

export const randomUserNameGenerator = (nickname: string) => {
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return `${nickname}_${randomNumber}}`;
};

export const containsOnlyOneEmoji = (text: string): boolean => {
  if (typeof text !== "string") {
    return false;
  }

  const emojiRegexPattern = emojiRegex();
  const emojiMatches = text.match(emojiRegexPattern);
  return (
    emojiMatches !== null &&
    emojiMatches.length === 1 &&
    text.trim() === emojiMatches[0]
  );
};

// Convert negative hue values to positive values between 0deg and 360deg
export const getPositiveHueValue = (value: number) => {
  let positiveValue = value;
  while (positiveValue < 0) {
    positiveValue += 360;
  }
  return positiveValue % 360;
};

export const secondsToTime = (duration: string) => {
  const d = parseFloat(duration);
  const seconds = Math.floor(d % 60);
  const minutes = Math.floor((d / 60) % 60);
  const hours = Math.floor((d / (60 * 60)) % 24);

  const pad = (num: number) => (num < 10 ? "0" + num : num.toString());

  if (hours === 0) {
    return pad(minutes) + ":" + pad(seconds);
  }

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
};

export const compareUrlsAndRedirect = (inputUrl) => {
  // Get the current URL before the question mark
  const currentUrl = window.location.href.split("?")[0];

  // Get the input URL before the question mark
  const inputUrlBeforeQuestionMark = inputUrl.split("?")[0];

  // Compare the URLs
  if (currentUrl !== inputUrlBeforeQuestionMark) {
    // Redirect to the input URL
    window.location.href = inputUrl;
  }
};

// Define the function at the beginning of your component
export const shouldSkipPlatform = (platform: string) => {
  // Add any platform that should be skipped to this array
  const platformsToSkip = ["disneyplus", "hulu", "hbomax"];
  return platformsToSkip.includes(platform);
};
