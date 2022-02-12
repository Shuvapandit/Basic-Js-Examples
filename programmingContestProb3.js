/* ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 
যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 
যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 
আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  
এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।  */

// :problem 3 
function picnicBudget(totalNumbermembers) {
    if (totalNumbermembers <= 0) {
        const inviled_Member = ' Inviled number .Please enter grater than 0'
        return inviled_Member;
    }
    else if (totalNumbermembers <= 100) {
        const Frist100Menbers = totalNumbermembers * 5000;
        return Frist100Menbers;
    }
    else if (totalNumbermembers <= 200) {
        const first100Members = 100 * 5000;
        const first101_200Members = totalNumbermembers- 100; 
        const for200Members = first101_200Members * 4000 + first100Members;
        return for200Members;

    }
    else {
        const first100Members = 100 * 5000;
        const first101_200Members = 100 * 4000;
        const morethan200 = totalNumbermembers - 200;
        const morethan200Members = morethan200 * 3000 + first101_200Members + first100Members;
        return morethan200Members ;
    }

}
//input how many Number of members will be  going to picnic
let output=picnicBudget(302);
console.log(output)
