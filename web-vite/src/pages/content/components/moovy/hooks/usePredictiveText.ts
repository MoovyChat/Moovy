import { useEffect, useState } from "react";

import _ from "lodash";
import { useGetNickNameSuggestionsMutation } from "../../../../../generated/graphql";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  sliceSetNameSuggestions,
  sliceSetWordSuggestions,
} from "../../../../redux/slices/textArea/textAreaSlice";

interface PredictiveTextHook {
  suggestions: string[];
  loading: boolean;
  error: Error | null;
}

interface NameObject {
  id: string;
  name: string;
}

const usePredictiveText = (fullText: string): PredictiveTextHook => {
  const getLastWord = (input: string): string => {
    const words = input.trim().split(/\s+/);
    return words[words.length - 1];
  };

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const dispatch = useAppDispatch();
  const [, getNickNameSuggestions] = useGetNickNameSuggestionsMutation();

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      setError(null);

      try {
        const lastWord = getLastWord(fullText);
        if (lastWord.charAt(0) === "@") {
          const wordToSearch = lastWord.substring(1);
          const res = await getNickNameSuggestions({ search: wordToSearch });

          const { data } = res;
          if (data) {
            const names: NameObject[] =
              data.getTopThreeUserNames as NameObject[];
            dispatch(sliceSetNameSuggestions(names));
            dispatch(sliceSetWordSuggestions([]));
          }
        } else {
          const searchURL = `https://api.datamuse.com/sug?s=${lastWord}&max=3`;
          const response = await fetch(searchURL);

          const data = await response.json();
          const suggestions = data.map((item) => item.word);

          dispatch(sliceSetNameSuggestions([]));
          dispatch(sliceSetWordSuggestions(suggestions));
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
  }, [fullText]);

  return { suggestions, loading, error };
};

export default usePredictiveText;
