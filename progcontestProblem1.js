/* ১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।  */
//:problem 1
function anaToVori(ana){
    if(ana<=0 ){
        let invalid="Please enter valid amount."
        return invalid;
    }
    else{
        //we know 16=1 vori
        let vori=ana   /16*1;
        return vori;

    }

}
var output= anaToVori(64);
console.log(output);
