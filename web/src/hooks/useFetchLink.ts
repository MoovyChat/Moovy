import { useMemo, useState } from 'react';

const useFetchLink = (message: string) => {
  const [link, setLink] = useState<string | null>(null);
  const linkRegex =
    /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/;
  useMemo(() => {
    const match = message.match(linkRegex);
    if (match) {
      setLink(() => match[0]);
    } else {
      setLink(null);
    }
  }, [message]);

  return link;
};

export default useFetchLink;
