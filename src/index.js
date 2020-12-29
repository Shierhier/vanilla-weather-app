function displayTemperature(response) {
    let city = document.querySelector("#city");
    let temperature = document.querySelector("#temperature");
    let description = document.querySelector("#description");
    city.innerHTML = response.data.name;
    temperature.innerHTML = Math.round(response.data.main.temp);
    description.innerHTML = response.data.weather[0].description;
}

let apiKey = "ec260614c11f0896fd34ffe37c5a9a38";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);