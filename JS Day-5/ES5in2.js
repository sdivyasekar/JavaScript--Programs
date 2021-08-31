/*const num=[34,76,87,3,23];
const num1=num.every(myFunction);
console.log(num1);
function myFunction(value)
{
    return value>18;
}*/

const mem=[34,6,34,32,86,23,5,6];
const mem1=mem.some(myFunction);
console.log(mem1);
function myFunction(value)
{
    return value>18;
}

const fruits=["Apple","Banana","Carrot","Dragon","Banana"];
let fru=fruits.indexOf("Banana");
console.log(fru);

const fruit=["Apple","Banana","Carrot","Dragon","Banana"];
let fre=fruit.lastIndexOf("Banana");
console.log(fre);

//JSON Parse

const str='{"Name":"Divya","age":22,"Gender":"Female"}'
const str1=JSON.parse(str);
console.log(str1.Name);

const obj={Name:"Divya",age:22,Gender:"Female"};
const strg=JSON.stringify(obj);
console.log(strg);

console.log(Date.now());
var d=new Date();
console.log(d.getTime());

var n=new Date();
console.log(d.toJSON());
console.log(d.toISOString());