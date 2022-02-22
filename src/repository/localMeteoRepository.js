const localMeteoRepository = {
    async getWeather(latitude,longitude) {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=41fbe65d8086f214e6587cbd4edcd446`);
            const listData = await data.json()
            // console.log(listData);
            return listData
        } catch (err) {
            console.log("error" + err);
        }
    }
}

export default localMeteoRepository