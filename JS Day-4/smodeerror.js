"use strict";
function Hello()
{
  y=20;// thru an error
  console.log(y);
    
}
Hello();   

let person={name:"Divya",age:22};
console.log(person.pop());//can't delete the object in strict method

function hello(p1,p1)
{
  console.log("Hello");
}
hello();

let argument="Hello";
let eval=45;// not allowed
console.log(eval);