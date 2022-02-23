import {API_KEY} from "../services/constants";

const meteoByCityNameRepository = {
    async getWeatherByCityName(name) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`);
            const listData = await data.json()
            // console.log(listData);
            return listData
        } catch (err) {
            console.log("error" + err);
        }
    }
}

export default meteoByCityNameRepository