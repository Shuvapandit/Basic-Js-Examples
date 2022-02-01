/*var factorial=1;
for(var i=1;i<=7;i++){
   

    factorial=factorial*i;
}
console.log(factorial)

function f(num){
    let factr=1;
    let i=1;
    while(i<=num){
        factr= factr * i;
        i++;

    }
    return factr;
}
let ans =f(5);
console.log(ans)
*/

function f(num){
    let factr=1;
    let i=num;
    while(i>=1){
        factr= factr * i;
        i--;

    }
    return factr;
}
let ans =f(5);
console.log(ans)