//Sum all numbers till the given one
//Using a recursive function 
function sumto (n) {
  if (n===1) {
    return n;
  } else {
    return n + sumto(n-1);
  }
}

//console.log(sumto(5));

//Using a for loop
function sumto2 (n) {
  let result = 0;
  for (let i=0;i <= n; i++) {
    result += i;
  }
  return result;
}

//console.log(sumto2(5));

//using Formula

function sumto3 (n) {
  return n *(n+1)/2;
}

//console.log(sumto3(5));


//Calculate factorial

//uisng loop 
function factorial (n) {
  let result = n;
  for (let i = n-1; i > 0; i--) {
    result *= i;
  }
  return result;
}

//console.log(factorial(5));

// using recursive function
function factorial1 (n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n-1);
  }
}

//console.log(factorial1(5));


const object = { name: "Peter", age: 40};
const jsonString = JSON.stringify(object);
console.log(jsonString);

var test = {
  name: 'John',
  age: 21,
  scores: [89, 72, 96, 55, 66]
}
function type (obj) {
  return Object.prototype.toString.call(obj).match(/.* (.*)\]/)[  1];
}

console.log(type(test));