'use strict';

let age = 17;

let adult = age >= 18 ? true : false;
console.log(adult);

let num = 1;

let res = num >= 0 ? '1' : '2';
console.log(res);

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  console.log(elem);
}

arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
  console.log(elem);
}

let obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key);
}

for (let key in obj) {
  console.log(obj[key]);
}

obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
  console.log(key);
}

for (let key in obj) {
  console.log(obj[key]);
}

let i = 1;

while (i <= 5) {
  console.log(i);
  i += 1;
}

num = 500;

while (num > 10) {
  num = num / 2;
}

console.log(num);

i = 1;

while (i <= 100) {
  console.log(i);
  i += 1;
}

i = 11;

while (i <= 33) {
  console.log(i);
  i += 1;
}

num = 3;
let iter = 0;

while (num <= 1000) {
  num *= 3;
  iter += 1;
  console.log(num, iter);
}

// console.log(num , iter);

for (let i = 1; i <= 9; i += 1) {
  console.log(i);
}

for (let i = 1; i <= 9; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

for (let i = 1; i <= 100; i += 1) {
  console.log(i);
}

for (let i = 11; i <= 33; i += 1) {
  console.log(i);
}

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

for (let i = 0; i < 100; i += 3) {
  console.log(i);
}

for (let i = 100; i >= 0; i -= 1) {
  console.log(i);
}

arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length - 1; i += 1) {
  console.log(arr[i]);
}

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]);
}

for (let i = 1; i < arr.length; i += 1) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i -= 1) {
  console.log(arr[i]);
}

arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i <= arr.length - 1; i += 1) {
  console.log(arr[i]);
}

for (let i = 1; i < arr.length - 1; i += 1) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i -= 1) {
  console.log(arr[i]);
}

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  console.log(elem);
}

for (let elem of arr) {
  if (elem % 2 === 0) {
    console.log(elem);
  }
}
console.log('////////////');
arr = [2, 5, 9, 15, 1, 4];

for (let elem of arr) {
  if (elem > 3 && elem < 10) {
    console.log(elem);
  }
}
console.log('////////////');
obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (let key in obj) {
  if (!(obj[key] % 2 === 0)) {
    console.log(obj[key]);
  }
}

res = 0;

for (let i = 1; i <= 100; i += 1) {
  res += i;
}

console.log(res);

res = 0;

for (let i = 0; i <= 100; i += 2) {
  res += i;
}

console.log(res);

res = 0;

for (let i = 0; i < 100; i += 3) {
  res += i;
}
console.log(res);

res = 1;
let sum = 0;
for (let i = 1; i <= 20; i += 1) {
  res *= i;
  sum += res;
  console.log(res, 'sum:', sum);
}

console.log(i);

arr = [1, 2, 3, 4, 5];
res = 0;

for (let elem of arr) {
  res += elem;
}
console.log(res);

arr = [2, 5, 9, 3, 1, 4];
res = 0;

for (let elem of arr) {
  res += elem;
}

console.log(res);

arr = [2, 5, 9, 3, 1, 4];
res = 0;

for (let elem of arr) {
  if (elem % 2 === 0) {
    res += elem;
  }
}

console.log(res);
i = 2;
for (let elem of arr) {
  res += Math.pow(elem, elem);
  console.log(res);
}

console.log(res);

let str = '';

for (let i = 0; i < 10; i += 1) {
  str += i;
}
console.log(str);

str = '';

for (let i = 1; i <= 5; i++) {
  str += '-';
}

console.log(str);

str = '';

for (let i = 1; i < 10; i++) {
  str += i;
}

console.log(str);

str = '';

for (let i = 9; i > 0; i--) {
  str += i;
}

console.log(str);

str = '-';

for (let i = 1; i < 10; i += 1) {
  str += `${i}-`;
}

console.log(str);

arr = [10, 20, 30, 40, 21, 32, 51];

for (let i = 1; i <= 100; i += 1) {
  let str = String(i);

  if (str[0] === '1' || str[0] === '2') {
    console.log(i);
  }
}
console.log('..>>>>>>>');
res = 0;
for (let i = 0; i < arr.length; i += 1) {
  let str = String(arr[i]);
  for (let j = 0; j < arr.length; j += 1) {
    if (str[0] === '1') {
      console.log('stars by One');
    }
  }

  res += Number(str);
  console.log(str);
}
console.log(res);
