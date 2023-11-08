import React, { useState } from "react";

function useCounter(init) {
  const [n, setN] = useState(init);

  const increment = () => {
    setN(n + 1);
  };

  const decrement = () => {
    setN(n - 1);
  };

  return { increment: increment, decrement: decrement, n: n };
}

export default useCounter;
