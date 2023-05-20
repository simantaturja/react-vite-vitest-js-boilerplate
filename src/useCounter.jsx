// useCounter.tsx
import { useCallback, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);
  return { count, increment, decrement };
};
