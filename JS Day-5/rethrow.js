const num=5;
try
{
    throw new Error("This a try block error");
}
catch(Error){
 console.log("It has an error");
 if(num+8>10)
{
   console.log("Error Resolved");
}
else
{
    throw new Error("handled in new block");
}
} 