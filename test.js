// // Object Destructuring.

// // Js -> Requird.

// let student = {
//   name: "Bongai",
//   email: "b@gmail.com",
//   phone: "3423234",
//   car: "Toyota Prado",
// };
// // Destructuring to create variables from object kyes
// // console.log(student.name);

// const { name, car } = student;
// // console.log(name);

// // console.log(car);
// // const name = student.name;
// // const car = student.car;

// let students = ["Neemaat", "Isac", "Everyline"];

// const [chicken, st2, st3] = students;

// const st1 = students[0];

let age = 12;

let str = "";

if (age > 20) {
  //console.log("Age is > 20");
  str = "Age is > 20";
} else {
  //console.log("Yoy are too young");
  str = "Yoy are too young";
}

console.log(str);

// Teneray opperation.,
// let x=<condition> ? <true>:<false>

let is_age = age > 20 ? "Age is > 20" : "Yoy are too young";
console.log("is_age", is_age);

function sayMyname() {
  console.log("My Name is Swagger");
}

// let x = sayMyname; //

let x = function () {
  console.log("My Name is Swagger");
};

// let k = 123;

let y = sayMyname(); // return s
