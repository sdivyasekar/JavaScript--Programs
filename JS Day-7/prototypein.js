let animal={
    Eat:true,
    Walk()
    {
        console.log("All animals can jump");
    }
};
let rabbit={
    Jump:true
};
rabbit.__proto__=animal;
console.log(rabbit.Eat);
rabbit.Walk();