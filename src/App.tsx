import { useState } from "react";

export function App() {
  const [count2, setCount2] = useState(0);
  const [count, setCount] = useState(0);

  function updateCount(value: number){
    if(value < 0) {
      if((count - (value * -1)) < 0) {
        return
      }

      setCount(count - value)
    }

    setCount(count + value)

  }

  return (
     <div>
      {count}
      <button onClick={() => updateCount(1)}>
      +1
      </button>
      <button onClick={() => updateCount(-1)}>
      -1
      </button>
      <button onClick={() => updateCount(2) }>
        +2
      </button>
      <button onClick={() => updateCount(-2)}>
        -2
      </button>
     </div>
     
  );
}



