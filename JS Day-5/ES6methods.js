let txt="Hello world";
console.log(txt.includes("Hello"));
let str="Hello world";
console.log(str.startsWith("Wello"));
console.log(str.endsWith("world"));
console.log(Array.from("abcdef"));
const fruits=["fruits","apple","pineapple"];
const keys=fruits.keys();
let num=" ";
for(let x of keys)
{
  num=num+x+"\n";
}
console.log(num);