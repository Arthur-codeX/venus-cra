function Student(props) {
  console.log(props);
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Car: {props.car}</h1>
    </div>
  );
}

function BetterStudent(props) {
  const { name, email, car } = props; // destructure

  return (
    <div>
      <h1>The better Student !</h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Car: {car}</h1>
    </div>
  );
}

function BestStudent({ name, email, car }) {
  // destructure
  return (
    <div>
      <h1>The Best Student !</h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Car: {car}</h1>
    </div>
  );
}

function AnotherStudent({ name, email, carModel, carCc }) {
  return (
    <div>
      <h1>The Best Student !</h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Car Model: {carModel}</h1>
      <h1>Car CC: {carCc}</h1>
    </div>
  );
}

function AnotherStudent2({ name, email, carInfo }) {
  return (
    <div>
      <h1>The Best Student !</h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Car Model: {carInfo.model}</h1>
      <h1>Car CC: {carInfo.cc}</h1>
    </div>
  );
}

function ConditionalStudent({ age }) {
  if (age > 18) {
    return (
      <div>
        <h1>You can drink Alcohol</h1>
      </div>
    );
  }
  return null;
}

// Named exports -> Multiple things.
// One thing use default export

export {
  ConditionalStudent,
  BetterStudent,
  BestStudent,
  AnotherStudent,
  AnotherStudent2,
};
export default Student;
