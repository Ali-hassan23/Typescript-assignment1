//Question 14

let guestList :  string[] = ["Ali","Hassan","Zaid","Amna","Hafsa","Wahab"]
for(let i = 0;i<guestList.length;i++){
    console.log("Hi! " + guestList[i] + " How are you ? \n You are invited to dinner")
}

//Question 15

guestList[3] = "Hiba"
for(let i = 0;i<guestList.length;i++){
    console.log("Hi! " + guestList[i] + " How are you ? \n You are invited to dinner")
}

//Question 16

let additionalGuest : string[] = ["Ayza","Shayan","Kamran"]
guestList.push(...additionalGuest)
for(let i = 0;i<guestList.length;i++){
    console.log("Hi! " + guestList[i] + " How are you ? You are invited to dinner")
}

//Question 17

for(let i = 0;guestList.length != 2;i++){
    let uninviteGuest : any = guestList.pop()
    console.log("Sorry you are not invited " + uninviteGuest);   
}

guestList = []

for(let i = 0;i<guestList.length;i++){
    console.log(guestList[i])
}

//Question19
console.log("In question 14 i am inviting " + guestList.length + " guests")
