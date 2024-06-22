// 17 assignment
let guestList = ["Anus","Aira","Dua","rimsha"];
let dontcome = guestList[0];
console.log(dontcome,"nhi a sakta");
guestList.splice(0,1, "nehal");
console.log("Good News ! We Have found a Bigger Table For Dinner ");
guestList.unshift("Aslam");
let middleIndex : number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0,  "bushra");
console.log("Update List Of Our Guests");
guestList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me?`));
console.log("Unfortunately, the new dinner table wont arrive on time, So i  can only invited two guests to dinner with me ");
while(guestList.length > 2) {
    let removedguest = guestList.pop();
    console.log(`Sorry, ${removedguest} i cant invited you to dinner`);
}
console.log("intivations to the last 2 guest");
guestList.forEach(lasttwo =>console.log(`luckly ${lasttwo}, you are still invited to dinner `));
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
