import Student, {
  BetterStudent,
  BestStudent,
  AnotherStudent,
  AnotherStudent2,
  ConditionalStudent,
} from "./Student";

// event listners.
// What are event listeners in js.
// Example of some event listeners in js.
// onClick

const students = [
  {
    name: "John",
    email: "john@gmail.com",
    phone: "123-232424323",
  },
];

function MainComponent() {
  let student = {
    name: "John",
    email: "john@gmail.com",
    car: "Toyota",
    carInfo: {
      model: "Toyota",
      cc: "2000cc",
    },
  };

  // Inline styles
  // style

  let styleObj = {
    backgroundColor: "green",
    fontWeight: "bold",
    fontSize: "",
  };

  function AlertMe() {
    console.log("Alert Me");
  }

  let y = AlertMe();
  console.log("y=>", y);

  return (
    <div>
      <h1 className="bg-red text-big">This is a list of my students.</h1>
      <p
        style={{
          backgroundColor: "green",
          fontWeight: "bold",
          fontSize: "",
        }}
      >
        This is a p
      </p>
      <p style={styleObj}>Same styles</p>
      <ConditionalStudent age={12} />
      {/* <Student name={student.name} email={student.email} car={student.car} />
      <BetterStudent
        name={student.name}
        email={student.email}
        car={student.car}
      />
      <BestStudent
        name={student.name}
        email={student.email}
        car={student.car}
      />
      <AnotherStudent
        name={student.name}
        email={student.email}
        carModel={student.carInfo.model}
        carCc={student.carInfo.cc}
      />
      <AnotherStudent2
        name={student.name}
        email={student.email}
        carInfo={student.carInfo}
      /> */}
      {/* <button
        onClick={function () {
          console.log("Button was clicked");
        }}
        onMouseOver={() => console.log("Mouse was here")}
      >
        HEllo World
      </button> */}

      <button
        onClick={AlertMe}
        onMouseOver={() => console.log("Mouse was here")}
      >
        HEllo World
      </button>
    </div>
  );
}

export default MainComponent;
