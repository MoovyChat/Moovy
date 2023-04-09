import { Emoji, fetchFromCDN } from 'emojibase';
import { FrequentEmoji, RecentEmoji, db } from '../../indexedDB/db';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { refinedG } from '../../components/emoji-picker/emojiPicker';

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

  useEffect(() => {
    // Once we have the data, inject the data into the indexedDB.
    const runIndexDb = async () => {
      try {
        const record = await db.emojis.get(1);
        if (!record) {
          const refGroups = await fetchEmojis();
          setRefinedGroups(refGroups);
          try {
            await db.emojis.add({
              emojis: refGroups,
            });
          } catch (e) {
            console.log(`Failed to add emojiDB ${e}`);
          }

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

          try {
            await db.frequent.bulkAdd(forFrequent);
            await db.recent.bulkAdd(forRecent);
          } catch (e) {
            console.log(`Failed to add emojiDB ${e}`);
          }
        } else {
          try {
            const refGroups = await db.emojis.get(1);
            await setRefinedGroups(refGroups?.emojis as refinedG);
          } catch (e) {
            console.log(`Failed to add emojiDB ${e}`);
          }
        }
      } catch (error) {
        console.log(`Failed to add emojiDB ${error}`);
      }
    };
    runIndexDb();
  }, []);

  return refinedGroups;
};

export default useFetchEmojis;
