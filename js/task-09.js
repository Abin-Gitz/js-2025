function sayHello(name) {
  console.log('sayHello, ' + name);
}
sayHello('Abin');

function calculateCircleArea(radius) {
  var pi = 3.14;
  var area = pi * radius * radius;
  console.log(`The area of the circle is: ${area} `);
}
calculateCircleArea(30);

function calculateArea(width, height) {
  var area = width * height;
  console.log(`The area of the rectangle is: ${area} `);
}
calculateArea(40, 20);

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
checkEvenOdd(3)