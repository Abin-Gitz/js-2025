console.log('apple');
console.log('orange');

// const res = fetch('http://fakestoreapi.com')
// console.log(res)

// fetch('https://fakestoreapi.com/products').then(res => {
//   res.json().then(data => {
//     console.log(data);
//   });
// });

fetch('https://fakestoreapi.com/products')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  });

console.log('mango');
console.log('grape');
