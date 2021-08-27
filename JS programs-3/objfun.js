const stud={
    name:"Divya",
    last:"Priya",
    age:21,
    greet:function()
    {
        console.log("Hello Everyone");
        return this.name+" "+this.last;
    }
}
console.log(stud.greet());
let num="23.32";
let meb=parseInt(num);
console.log(meb);
let str="NaMe";
console.log(str.toLowerCase());