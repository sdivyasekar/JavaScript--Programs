const stud=[45,23,97,67];
stud.sort();
console.log(stud);
stud.reverse();
console.log(stud);

const mem=[
    {id:45,name:"Divya"},
    {id:87,name:"Priya"},
    {id:32,name:"Abi"},
];

mem.sort(function (a,b){
  if(a.name<b.name) return -1;
  if(a.name>b.name) return 1;
  return 0; 
});
  console.log(mem);

  //numeric sort//compare function

  const vin=[76,98,23,95,67];
  
    vin.sort(function(a,b){
    return a-b;

    });
    console.log(vin);

  const vim=[34,98,54,12,87];
  vim.sort(function(a,b)
  {
    return(0.5-Math.random())
  });
  console.log(vim);
  const vir=[75,98,23,100,43,65];
  function myArraymax(arr)
  {
    return Math.max.apply(null,arr);
  }
  console.log(myArraymax(vir));
