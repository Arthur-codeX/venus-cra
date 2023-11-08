const Comp1 = () => {
  return (
    <div>
      <h1>I am Comp1</h1>
    </div>
  );
};

function Comp2() {
  return (
    <div>
      <h1>I am Comp2</h1>
    </div>
  );
}

function Comp3() {
  return (
    <div>
      <h1>I am Comp3</h1>
    </div>
  );
}

function MainComponent() {
  return (
    <div>
      <h1>This is a Main Component</h1>
    </div>
  );
}

export { Comp1, Comp2, Comp3 };
export default MainComponent;
