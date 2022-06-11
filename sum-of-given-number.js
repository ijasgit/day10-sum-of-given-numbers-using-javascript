let num,num1,sum=0;
num=parseInt(prompt("enter numbers to add"))
for (i=1;i<=num;i++)
{
    num1=parseInt(prompt("enter number"))
    sum=sum+num1;
}
console.log(+sum);