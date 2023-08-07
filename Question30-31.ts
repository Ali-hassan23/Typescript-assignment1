// let username : string[] = ["admin","eric","cedric","logan","alberto del rio"]
let username : string[] = []
if(username.length == 0){
    console.log("We need to find users");
} else {
    for(let i=0;i<username.length;i++){
        if(username[i] == "admin"){
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log("Hello " + username[i] + " thank you for logging in again.")
        }
    }
}

