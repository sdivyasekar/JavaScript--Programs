let countValue=new Promise(function(resolve,reject)
{
    resolve("promise ll execute");
});
countValue.then(function successValue(result)
{
    console.log(result)
});
countValue.then(function successValue(result)
{
    console.log("U can call the next asynchronous thread");
});
