const car_function = (manufacturer:string,model:number,options:any[]) =>{
    let car = {
        manufacturer : manufacturer,
        model : model,
        options : options
    }

    return car
}

console.log(car_function("Suzuki",2020,["1",true,"Mehran"]))




