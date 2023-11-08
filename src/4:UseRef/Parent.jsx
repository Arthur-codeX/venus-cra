import React, { useEffect, useRef, useState } from "react";

import useCounter from "./useCounter";
import useCounter2 from "./useCounter2";

function Parent() {
  const input = useRef(null);
  const file = useRef(null);

  const { n, increment, decrement } = useCounter(20);

  function handleSubmit() {
    console.log(input.current);
    console.log("value: ", input.current.value);
  }

  function handleUpload() {
    console.log(file);
    file.current.click();
  }

  return (
    <div>
      <h1>The value of n={n}</h1>

      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

      <ChildComponent />

      <input
        type="file"
        style={{
          visibility: "hidden",
        }}
        ref={file}
      />
      <div onClick={handleUpload}>Upload A file</div>
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
}

function ChildComponent() {
  const [increment, decrement, n] = useCounter2(500);

  const counter = useCounter2(-99);

  return (
    <div>
      <h1>Child={n}</h1>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

      <h1>Child={counter[2]}</h1>
      <div>
        <button onClick={counter[0]}>+1</button>
        <button onClick={counter[1]}>-1</button>
      </div>
    </div>
  );
}

export default Parent;
