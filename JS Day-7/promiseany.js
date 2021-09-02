p1=Promise.reject(50);
p2=20;
p3=new Promise(function(resolve,reject)
{
    setTimeout(resolve,1000,"greek");
});
Promise.any([p1, p2, p3]).then(function(values) 
    {
        console.log(values);
    }
    );