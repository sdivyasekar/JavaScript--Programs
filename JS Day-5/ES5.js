/*const num="Hello World";
console.log(num[3]);
const str='Hello \
Everyone';
console.log(str);
var obj={name:"Divya",new:"Yes"};
console.log(obj.new);  
var trm="  Hi,I am Divya   ";
console.log(trm.trim());         
const arr=["Names","Ages","Gender","Hobbies"];
console.log(Array.isArray(arr));
var txt="";
var number=[64,32,98,45,23,98];
number.forEach(myFunction);
console.log(txt);
function myFunction(value)
{
txt=txt+value+"\n";
}
const arr1=[42,87,43,98,12];
var per=arr1.map(myFunction); 
console.log(per);
function myFunction(value)
{
    return value*2;
}
const fil=[98,544,32,65,86,44];
const fil1=fil.filter(myFunction);
console.log(fil1);
function myFunction(value)
{
    return value>100;
}*/
const red=[23,65,87,23,87];
const mem=red.reduce(myFunction);
console.log(mem);
function myFunction(sum,value)
{
    return value+sum;
}