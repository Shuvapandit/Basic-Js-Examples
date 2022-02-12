/* ৪. [ ফাংশন নেম দিতে হবে oddFriend]:
you need to take a string in an array and show the largest odd string of these string as the output. */


//:problem4
function oddFriend(friendsname) {
    for (let i = 0; i < friendsname.length; i++) {
        if (friendsname[i].length % 2 != 0) {
            return friendsname[i];
        }
    }
    return "There is no odd name";

}


let friendsname=["TutulRahman","Mdmessi","Shuva"]
var output = oddFriend(friendsname);
console.log(output)
