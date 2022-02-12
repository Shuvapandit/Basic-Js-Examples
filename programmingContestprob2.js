/* ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। 

১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।  */
//:problem2
function pandaCost(singara,sumucha,jilipi){
    if(singara<=0 && sumucha <=0 && jilipi<=0){
      let invalid="Please enter valid amount.";
      return invalid;
     
    }
    else{
  
      let totalprice= singara*7 /*taka */+sumucha*10 /*taka */ +jilipi*15 /*taka */;
      return totalprice;
     
  
    }
  
  } 
  
//input how many singara,sumucha,jilipi do you have
let output=pandaCost(2,2,3);
console.log( output);  

  