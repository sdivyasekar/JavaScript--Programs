var x=325;
var r;
var n=0;
while(x>0)
{
  r=x%10;
  n=n*10+r
  x=x/10;
}
console.log(n);