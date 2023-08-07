let numberArray : number[] = [1,2,3,4,5,6,7,8,9]
let ordinal : string;
for(let i = 0;i<numberArray.length;i++){
    if(numberArray[i] == 1){
        ordinal = "st"
    } else if(numberArray[i] == 2) {
        ordinal = "nd"
    } else if(numberArray[i] == 3){
        ordinal = "rd"
    } else {
        ordinal = "th"
    }

    console.log(`${numberArray[i] + ordinal}`);    
}
