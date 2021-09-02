async function f()
{
   console.log("It is an asynchronous function");
   return Promise.resolve(8);
}
f().then (function(result)
{
    console.log(result);
});