function getfactorial(num)

{
    let fact=1;
    for (let i=1;i<=num;i++)
    {
       
        fact = fact * i;
    }
    return fact;
}
var ans =getfactorial(20);
console.log(ans);