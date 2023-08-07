let animals : string[] = ["Dog","Cat","Lion"]

for(let i = 0;i<animals.length;i++){
    if(animals[i] == "Lion"){
        console.log(`${animals[i]} is a dangerous animal`);
    } else {
        console.log(`${animals[i]} is a good pet`);
    }
}
