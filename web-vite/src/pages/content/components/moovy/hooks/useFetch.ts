import { useEffect, useState } from 'react';

export function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, {
      signal: controller.signal,
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then((data) => setData(data))
      .catch(setError)
      .finally(() => setLoading(false));
    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, data, error };
}
