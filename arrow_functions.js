/*function myName(name) {
  console.log(name);
}
myName('Chris');
myName('Katie'); */

const myName = name => {
  console.log(name);
}
myName('Chris');
myName('Katie');

const info = (name, age) => {
  console.log(name, age);
}
info('Katie', 28);

// const mult = (number) => {
//   return number * 2;
// }
// console.log(mult(8));

//this is the same as above
const mult = number => number * 2;
console.log(mult(8));
