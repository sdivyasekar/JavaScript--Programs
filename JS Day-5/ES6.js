const x=(x,y)=>{
    return x*y;
}
console.log(x(5,5));

const cars=["BMW","Nano","Mini"];
let txt=" ";
for(let z of cars){
 txt+=z;
}
console.log(txt);

let language='Javascript';
let str=" ";
for(let a of language)
{
    str+=a+"\n";
}
 console.log(str);

 // Set Object

 const letter=new Set();
 letter.add('A');
 letter.add('B');
 letter.add('C');
 console.log(letter.size);