function dosomething(){
    console.log("Hello");
}
console.log("A");
console.log("B");
console.log("C");
//setTimeout(dosomething,5000)  
setTimeout(function(){
    console.log("I am v")
},3000)
setTimeout(()=>{
console.log("X Man")
},5000);
console.log("D");
console.log("E");
console.log("F");