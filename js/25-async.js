console.log('apple');
console.log('orange');

const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const res = await response.json();
  console.log(res);
};

fetchData();

console.log('mango');
console.log('grape');
