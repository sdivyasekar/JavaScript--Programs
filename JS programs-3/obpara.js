function stud(name,id,marks)
{
    this.name=name,
    this.id=id,
    this.marks=marks,
    this.hello=function()
    {
        console.log("Parameterized constructor");
    }
}
 const stud1=new stud("Divya",683,98);
 const stud2=new stud("Priya",7843,88);
 console.log(stud1.name);
 console.log(stud2.id);