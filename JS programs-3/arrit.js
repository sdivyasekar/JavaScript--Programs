const d=new Date();
console.log(d);
const p=new Date(2021,11,21,7,34,12,765);
console.log(p);
const m=new Date(2018);
console.log(m);
const n=new Date(1999,7,12);
console.log(n);
const q = new Date("October 13, 2014 11:13:00");
console.log(q);
const r=new Date(1000000);
console.log(r);
const a=new Date();
console.log(a.toString());
const b=new Date();
console.log(b.toUTCString());
const c=new Date();
console.log(c.toDateString());
const e=new Date();
console.log(c.toISOString());
const f=new Date("january,2,2018");
console.log(f);
const g=new Date("January 2 2019");
console.log(g);
const h=new Date("25 january 2020");
console.log(h);
let cdate=new Date();
console.log(cdate);
let month=cdate.getMonth()+1;
console.log(month);
let day=cdate.getDate();
console.log(day);
let year=cdate.getFullYear();
console.log(year);