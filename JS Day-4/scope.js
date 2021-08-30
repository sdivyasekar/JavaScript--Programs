'use strict';

let obj1 = {age:23,name:"Divya"};
let x;

Object.defineProperty(obj1, x, { value: 42, writable: false });
obj1.x = 9; 
console.log(obj1.x);
