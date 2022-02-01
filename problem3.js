/*তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। */
function agecalculation(age){
    if(age%2==0){
        console.log("Your age is even ")
        return true;
    }
    else {
        console.log("Your age is  odd ")
        return false;
    }
}
var yourage = agecalculation(3);

console.log(yourage);