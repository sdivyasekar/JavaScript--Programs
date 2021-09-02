let countValue=new Promise(function(resolve,reject)
{
    reject("This is an reject");
});
countValue.then(function successValue(result)
{
    console.log(result);
},
)
.catch(
    function successvalue1(result)
{
   console.log(result);
}
);