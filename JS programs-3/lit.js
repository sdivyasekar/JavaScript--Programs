//type 1-Literals
const stud={
    name:"Anu",
    id:975,
    Gender:"Female",
    hobies:["Drawing","Dancing","Playing Games"],
    hello:function()
    {
        console.log("This a type of object method");
    },
    Score:
    {
        maths:87,
        Science:90,
    }
}
console.log(stud.hobies[1]);
stud.hello();
console.log(stud.Score);
console.log(stud);
console.log(stud.Score.maths);

