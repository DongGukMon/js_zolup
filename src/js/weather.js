const API_key = "748a03ec9d7758d5ce25168d097c2881";

const callWeatherAPI = async (lat,long) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`
    console.log(url);
    const data = await (await fetch(url)).json()
    
    const city = data.name;
    const weather = data.weather[0].main;
    const temp = data.main.temp;
    
    document.querySelector(".weather #city").innerText = city;
    document.querySelector(".weather #sky").innerText = weather;
    document.querySelector(".weather #temp").innerText = temp;

}

const onGeoOK = (position) =>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    callWeatherAPI(latitude,longitude);
    
}

const onGeoErr = (err) =>{
    alert(err.masage);
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoErr);