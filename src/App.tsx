import { useState } from "react";

export function App() {
  const [count2, setCount2] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Aumenta 1</button>
      <button
        onClick={() => {
          if (count == 0) {
            setCount(0);
            return;
          }
          setCount(count - 1);
        }}
      >
        Diminui 1
      </button>

      <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 + 2)}>Aumenta 2</button>
      <button onClick={() => setCount2(count2 - 2)}>Diminui 2</button>
    </>
  );
}
