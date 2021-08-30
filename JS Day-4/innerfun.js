/*const person={
  name:"Divya",
  age:22,
  greet()
  {
      console.log(this);
      console.log(this.name);
      function Hello()
      {
          console.log(this);
          console.log(this.age);
      }
     Hello();
  }
}
person.greet();*/
function Hello()
    {
        name="Divya",
        console.log("Everyone");

 greet=()=>{
    console.log(this.name);
}
greet();
    }
Hello();

