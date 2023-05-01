import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { sliceSetToxicValues } from "../../../../redux/slices/misc/miscSlice";

interface DetoxifyResults {
  predictions: { [label: string]: number };
  document: string;
}

const useDetoxify = (inputText: string): [DetoxifyResults | null, boolean] => {
  const [results, setResults] = useState<DetoxifyResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const url = "https://toxic.moovychat.com/predict";
  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input_text: inputText }),
      });
      const data = await response.json();
      setResults(data);
      dispatch(sliceSetToxicValues(data));
      setIsLoading(false);
    };

    if (inputText !== "") {
      fetchResults();
    } else {
      setResults(null);
      dispatch(sliceSetToxicValues(null));
    }
  }, [inputText]);

  return [results, isLoading];
};

export default useDetoxify;
