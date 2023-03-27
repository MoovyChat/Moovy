import {
  sliceSetNameSuggestions,
  sliceSetWordSuggestions,
} from '../../redux/slices/textArea/textAreaSlice';
import { useEffect, useState } from 'react';

import _ from 'lodash';
import { useAppDispatch } from '../../redux/hooks';
import { useGetNickNameSuggestionsMutation } from '../../generated/graphql';

interface PredictiveTextHook {
  suggestions: string[];
  loading: boolean;
  error: Error | null;
}

interface NameObject {
  id: string;
  name: string;
}

const usePredictiveText = (
  searchAPI: string,
  fullText: string
): PredictiveTextHook => {
  const getLastWord = (input: string): string => {
    const words = input.trim().split(/\s+/);
    return words[words.length - 1];
  };

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const dispatch = useAppDispatch();
  const [_nns, getNickNameSuggestions] = useGetNickNameSuggestionsMutation();

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      setError(null);

      try {
        const lastWord = getLastWord(fullText);
        if (lastWord.charAt(0) === '@') {
          const wordToSearch = lastWord.substring(1);
          const res = await getNickNameSuggestions({ search: wordToSearch });

          const { data, error } = res;
          if (error) console.log(error);
          if (data) {
            const names: NameObject[] = data?.getTopThreeUserNames!;
            dispatch(sliceSetNameSuggestions(names));
            dispatch(sliceSetWordSuggestions([]));
          }
        } else {
          let searchURL = `${searchAPI}${lastWord}`;
          const response = await fetch(searchURL, {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          });

          const str = await response.text();
          const data = new window.DOMParser().parseFromString(str, 'text/xml');
          const el = data.getElementsByTagName('suggestion');
          let firstWordSuggestions: string[] = [];
          let secondWordSuggestions: string[] = [];

          for (let item in el) {
            let _element = el[item];
            if (_element) {
              let node = _element.attributes && _element.attributes[0];
              let value = node && node.nodeValue!.split(' ');
              if (value && !firstWordSuggestions.includes(value[0])) {
                firstWordSuggestions.push(value[0]);
              }
              if (value && !secondWordSuggestions.includes(value[1])) {
                secondWordSuggestions.push(value[1]);
              }
            }
          }

          const combinedSuggestions = _.concat(
            firstWordSuggestions,
            secondWordSuggestions
          );
          const filteredSuggestions = combinedSuggestions.filter(Boolean);

          dispatch(sliceSetNameSuggestions([]));
          dispatch(sliceSetWordSuggestions(filteredSuggestions));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (fullText) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
      dispatch(sliceSetNameSuggestions([]));
      dispatch(sliceSetWordSuggestions([]));
    }
  }, [searchAPI, fullText]);

  return { suggestions, loading, error };
};

export default usePredictiveText;
