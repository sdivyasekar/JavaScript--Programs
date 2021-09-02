const count=true;

let countValue=new Promise(function(resolve,reject)
{
    if(count)
    {
        resolve("If the condition is true");
    }
    else{
        reject("If the condition is False");
    }
});
console.log(countValue);
