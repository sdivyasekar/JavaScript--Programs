// create an object using instance
const stud=new Object({
    name:"Kumar",
    id:56,
    hobies:["reading","dancing","Playing"],
    hello:function(){
        console.log("Hello Everyon");

    },
    Scores:{
        maths:87,
        Science:90,
    }
});
console.log(typeof stud); 
console.log(stud.name);
console.log(stud.hobies[0]);
stud.hello();
console.log(stud.Scores.maths);