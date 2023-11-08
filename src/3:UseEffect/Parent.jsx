import React, { useEffect, useState } from "react";

// useEffect =>
// whow use effect works.

// useEffect(function,dependencie array)

// When a componet is unmounted.
// When a componet is destroyed or comes out of view.

// when a componet is mounted. useEffect(f,[])
// when a componet is rendered and mounted. useEffect(f)
//when a componet is mounted and dependency change useEffect(f,[dependecies,3 dep,4 dep])

const ChildComponent = ({ n }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`The value of n=${n} date=${Date.now()}`);
    }, 1000);

    // This function will run when component is destroyed
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>I am the child component</h1>
    </div>
  );
};

const Parent = () => {
  const [showChild, setShowChild] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    setN(n + 1);
  }, [showChild]);

  return (
    <div>
      <h1>This is a the Parent</h1>

      <div>
        <button onClick={() => setShowChild(!showChild)}>
          {showChild === true ? "Hide Child" : "Show Child"}
        </button>
      </div>

      {showChild === true ? <ChildComponent n={n} /> : null}
    </div>
  );
};

function FetchData({ setData }) {
  useEffect(() => {
    fetch("https://api.github.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
    }, []);
  return <div></div>;
}

export default Parent;
