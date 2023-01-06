import { useMemo, useState } from 'react';

import _ from 'lodash';
import { getFormattedWordsArray } from '../utils/helpers';
import { textMap } from '../utils/interfaces';
import { textMapTypes } from '../constants';

const useFormatMessage = (message: string) => {
  const [formattedMsg, setFormattedMsg] = useState<textMap[]>([]);
  useMemo(() => {
    let msgArray: textMap[] = [];
    if (message) {
      let msg: string = message;
      let finalEnd = 0;
      let index = 0;
      while (index < msg.length) {
        let remaining: string = msg.substring(index, msg.length);
        let l = remaining.indexOf('<s>');
        let r = remaining.indexOf('</s>');
        if (l === -1) break;
        if (r === -1) break;
        if (l > r) break;
        if (l > 0) {
          // non-spoiler.
          let text = remaining.substring(0, l);
          let res = getFormattedWordsArray(text);
          msgArray = _.concat(msgArray, res);
        }
        if (l < r) {
          let spoilerObj: textMap = {
            type: textMapTypes.SPOILER,
            message: remaining.substring(l + 3, r),
          };
          msgArray.push(spoilerObj);
        }
        index += r + 4;
        if (index <= msg.length) finalEnd = index;
        // Both non-spoiler and spoiler are pushed into the array until 'r'
      }
      // End of loop
      if (finalEnd !== msg.length && finalEnd < msg.length) {
        // Final non-spoiler.
        let finalPhrase: string = msg.substring(finalEnd, msg.length);
        let res = getFormattedWordsArray(finalPhrase);
        msgArray = _.concat(msgArray, res);
      }
      setFormattedMsg(msgArray);
    }
  }, [message]);
  return formattedMsg;
};

export default useFormatMessage;
