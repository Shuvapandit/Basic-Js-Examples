
/*prob8 
 তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
*/
function celsius(c){
    let Fahrenheit=(c*9/5)+32;
    return Fahrenheit;
}
const ferIs=celsius(5);
console.log(ferIs,"°F");
/* একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

 */
function Fahrenheit(f){
    let celsius=(f - 32) * 5.0/9.0;
    return celsius;
}
const celIs=Fahrenheit(5);
console.log(celIs,"°c");