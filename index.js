async function fetchData() {
    try {
        weatherData = [];

        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}");
        let data = await response.json();
        weatherData.push(data)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

fetchData()