let myFuntion = x => {
  x();
};

let printHello = () => {
  console.log('Hello');
};

myFuntion(printHello);
