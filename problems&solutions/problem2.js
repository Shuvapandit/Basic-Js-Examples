/* leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে। */
function leapyear(year){
    if(year%4==0){
        return true;
    }
    else {
        return false;
    }
}
var getleapyear = leapyear(2023);
console.log(getleapyear);