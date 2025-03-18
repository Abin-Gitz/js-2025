let person = {
  firstname: 'Abin',
  lastname: 'Y',
  place: 'Idukki',
  age: 25,
};

let { age, firstname, place, lastname, car = 'Benz' } = person;
console.log(car);
