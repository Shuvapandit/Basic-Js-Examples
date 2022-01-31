
//declare functiuon
//you can call a function n times
function fun(){
    console.log("hello world");
    console.log("");
}
//cal function
fun();
//parameter in function
function fn(x){
    console.log(x);
} 
fn(100);

//return in function

function fun1(x){
    console.log(x);
    var riceprice=20;
    var ricequantity= x / riceprice;
    return ricequantity;
}
var money=250;
 var rice=fun1(money);
 console.log("Ei nen rice",rice);