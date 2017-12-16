const person = {
  name: 'Max'
};

const secondPerson = person;

//example of reference
person.name = 'Manu';

console.log(secondPerson);
