let current_users : string [] = ["Ali","Hassan","Ahsan","John","Doe"]
let new_users : string [] = ["Bond","John","Belinski","Dahmer","Ahsan"]

for(let i=0;i<current_users.length;i++){
    for(let j =0 ;j<current_users.length;j++){
        if(current_users[i] == new_users[j]){
            console.log("Change username");   
        }
    }
}
