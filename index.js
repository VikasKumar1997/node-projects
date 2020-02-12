var mark = {
  height: 175,
  mass: 30
};

var john = {
  height: 162,
  mass: 50
};

// var result = (mark, john) => {
//   let mark_mass = (mark.mass * 1000) / (mark.height * mark.height);
//   let john_mass = (john.mass * 1000) / (john.height * john.height);
//   return mark_mass > john_mass ? "True" : "False";
// };

function BMI() {
  return (this.mass * 1000) / (this.height * this.height);
}
var mark_mass = BMI.call(mark);

var john_mass = BMI.call(john);

// var result = Boolean(mark_mass > john_mass);

var result = mark_mass > john_mass ? "True" : "False";

console.log("Is Mark's BMI is higher than John's?", result);
