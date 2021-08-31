function myDisplayer(some){
console.log(some);
}
let myPromise=new Promise(function(myResolve,myReject)
{
    let x=10;
    if(x==0)
    {
        myResolve("Ok");
    }
    else{
        myReject("Error");
    }
});
    myPromise.then(
        function(value){myDisplayer(value);},
        function(Error){myDisplayer(Error);}
    );
