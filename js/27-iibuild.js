const printHello = () => {
  console.log('Hello');
};

const id = setTimeout(printHello, 5000);

clearTimeout(id);
