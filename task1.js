var mark = {
  height: 175,
  mass: 70
};

var john = {
  height: 162,
  mass: 50
};

function cal_bmi() {
  return (this.mass * 1000) / (this.height * this.height);
}

var john_mass = cal_bmi.call(john);

var mark_mass = cal_bmi.call(mark);

function result() {
  return mark_mass > john_mass ? "True" : "False";
}

var answer = result();

function display() {
  console.log("Is Mark's BMI is higher than John's?", answer);
}

display();
