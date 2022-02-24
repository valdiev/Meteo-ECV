import {API_KEY} from "../services/constants";

const meteoRepository = {
    async getWeatherOneCall(latitude, longitude) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`);
            const listData = await data.json()
            return listData
        } catch (err) {
            console.log("error" + err);
        }
    },
    async getWeather(latitude, longitude) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
            const listData = await data.json()
            return listData
        } catch (err) {
            console.log("error" + err);
        }
    },
    async getWeatherByCityName(name) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`);
            const listData = await data.json()
            return listData
        } catch (err) {
            console.log("error" + err);
        }
    }
}
export default meteoRepository;