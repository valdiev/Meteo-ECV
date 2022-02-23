import {API_KEY} from "../services/constants";

const localMeteoRepository = {
    async getWeather(latitude,longitude) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
            const listData = await data.json()
            // console.log(listData);
            return listData
        } catch (err) {
            console.log("error" + err);
        }
    }
}

export default localMeteoRepository