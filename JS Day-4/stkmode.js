/*"use strick";
this.name="Divya";
function myFunction()
{
    console.log(this);
}
myFunction();*/

"use strict";
this.name="Priya";
function myFunction()
{
    console.log(this.name);
}
myFunction.call(this);
