const Person=
{
    name:"Sweetha",
    age:50,
    eyecolor:"Blue",
}
 let id=Symbol("id");
 Person[id]=453246;
 console.log(Person[id]);
 console.log(Person.id);


 function myFunction(x,y=10)
 {
     return x+y;
 }
 console.log(myFunction(5));
