//cheack leap year or not
function checkleapyear(year){
    if (year%4==0 && year%100!=0 || year%400==0)
    {
        console.log(year + " is leap year:")
    }
    else{
        console.log(year + " is not leap year")
    }

}



checkleapyear(2034);




