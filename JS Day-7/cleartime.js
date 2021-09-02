let count=0;

function increaseTime()
{
    count=count+1;
    console.log(count);
}
let id=setTimeout(increaseTime,3000);
clearTimeout(id);
console.log("I am the only one gng to execute");


function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

setTimeout(greet, 1000, 'John', 'Doe');