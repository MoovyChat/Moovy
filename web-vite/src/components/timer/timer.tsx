import { useEffect, useState } from "react";

// Timer Component
export const Timer = ({ startCount }) => {
  const [count, setCount] = useState(startCount);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return <span>{count}</span>;
};
