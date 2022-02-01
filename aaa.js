function leapyear(year){
    if(year%4==0){
        return true;
    }
    else {
        return false;
    }
}
var getleapyear = leapyear(2023);
console.log(getleapyear)