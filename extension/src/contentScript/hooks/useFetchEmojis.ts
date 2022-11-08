import { Emoji, fetchFromCDN } from 'emojibase';
import { FrequentEmoji, RecentEmoji, db } from '../../indexedDB/db';
import React, { useCallback, useMemo, useState } from 'react';

import { colorLog } from '../../Utils/utilities';
import { refinedG } from '../../components/emojiPicker/emojiPicker';

const useFetchEmojis = () => {
  const [refinedGroups, setRefinedGroups] = useState<refinedG>({});

  const fetchEmojis = useCallback(async () => {
    let rg: refinedG = {};
    const data: Emoji[] = await fetchFromCDN('en/data.json');
    // Refining data to the object with keys and subKeys.
    await data.map((em) => {
      let key = em.group!;
      let subKey = em.subgroup!;
      if (rg[key] === undefined) {
        rg = {
          ...rg,
          [key]: {
            [subKey]: [em],
          },
        };
      } else {
        if (rg[key][subKey] === undefined) {
          rg = {
            ...rg,
            [key]: {
              ...rg[key],
              [subKey]: [em],
            },
          };
        } else
          rg = {
            ...rg,
            [key]: {
              ...rg[key],
              [subKey]: [...rg[key][subKey], em],
            },
          };
      }
    });
    return rg;
  }, []);

  useMemo(async () => {
    // Once we have the data, inject the data into the indexedDB.
    const runIndexDb = async () => {
      try {
        const record = await db.emojis.get(1);
        if (!record) {
          const refGroups = await fetchEmojis();
          setRefinedGroups(refGroups);
          await db.emojis.add({
            emojis: refGroups,
          });
          const emojis = refGroups[0];
          const forFrequent = emojis[0].slice(0, 10).map((emoji, key) => ({
            id: key,
            count: 1,
            emoji,
          })) as FrequentEmoji[];
          const forRecent = emojis[1].slice(0, 10).map((emoji, key) => ({
            id: key,
            emoji,
          })) as RecentEmoji[];

          await db.frequent.bulkAdd(forFrequent);
          await db.recent.bulkAdd(forRecent);
          colorLog(`Successfully initialized emojiDB`);
        } else {
          const refGroups = await db.emojis.get(1);
          await setRefinedGroups(refGroups?.emojis as refinedG);
        }
      } catch (error) {
        colorLog(`Failed to add emojiDB ${error}`);
      }
    };
    runIndexDb();
  }, []);

  return refinedGroups;
};

export default useFetchEmojis;
