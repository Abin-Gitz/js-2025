let person = {
  firstname: 'Abin',
  lastname: 'Y',
  place: 'Idukki',
  age: 25,
};
// console.log(person);

// console.log(person['firstname']);
// let key = 'firstname';
// console.log(person[key]);

// person.car = 'BMW';
// person.age = 24;
// delete person.car

// console.log(person)

// console.log(Object.values(person))
// console.log(person.hasOwnProperty('place'))

for(key in person){
    console.log(person[key])
}