let magicians : string[] = ["Magician 1","Magician 2","Magician 3"]

//Question 41
const show_magicians = (magicians : string[]) => {
    for(let i = 0;i<magicians.length;i++){
        console.log(magicians[i]);
        
    }
}

//Question 42
const make_great = (magicians : string[]) => {
    for(let i = 0;i<magicians.length;i++){
        console.log(`The great ${magicians[i]}`)
    }
}

show_magicians(magicians)
make_great(magicians)

//Question 43
let great_magicians : string[] = []
for(let i = 0;i<magicians.length;i++){
    great_magicians[i] = `The great ${magicians[i]}`
}

console.log(great_magicians)
