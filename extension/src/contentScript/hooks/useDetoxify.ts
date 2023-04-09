import { useEffect, useState } from 'react';

interface DetoxifyResults {
  predictions: { [label: string]: number };
  document: string;
}

const useDetoxify = (inputText: string): [DetoxifyResults | null, boolean] => {
  const [results, setResults] = useState<DetoxifyResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://toxic.moovychat.com/predict';
  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_text: inputText }),
      });
      const data = await response.json();
      setResults(data);
      setIsLoading(false);
    };

    if (inputText !== '') {
      fetchResults();
    } else {
      setResults(null);
    }
  }, [inputText]);

  return [results, isLoading];
};

export default useDetoxify;
