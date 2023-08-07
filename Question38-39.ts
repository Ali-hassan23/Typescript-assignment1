const describe_city = (city : string, country : "Pakistan") =>{
    console.log(`${city} is a city of ${country}`);
}

describe_city("Lahore","Pakistan")
describe_city("Karachi","Pakistan")
describe_city("Kansas","Pakistan")

const city_country = (city : string, country : string) : string =>{
    return `${city},${country}`
}

console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Gotham","USA"));
console.log(city_country("London","UK"));


