let x="Hello";
function myFunction()
{
    let y="clarity";
    console.log(x+" "+y);
    if(y=="clarity")
    {
        let z="tts";
        console.log("global and local:"+x+" "+y+" "+z);
    }
    console.log("U cannot access the z :"+x+" "+y);
}
myFunction()