const make_album = (artist:string,title:string,tracks?: number) => {
    let album = {
        artist_name : artist,
        album_title : title,
        album_track : tracks
        
    }
    return album;
}

let a1 = make_album("John Legend","A good One",10)
let a2 = make_album("Ed Sheeran","Divide",12)
let a3 = make_album("Eminem","8 Mile")

console.log(a1)
console.log(a2)
console.log(a3)
