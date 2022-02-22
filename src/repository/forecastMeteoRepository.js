const forecastMeteoRepository = {
    async getWeather(latitude,longitude) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=41fbe65d8086f214e6587cbd4edcd446`);
            const listData = await data.json()
            return listData
        } catch (err) {
            console.log("error" + err);
        }
    }
}

export default forecastMeteoRepository;