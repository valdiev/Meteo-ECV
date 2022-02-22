const meteoRepository = {
    async currentWeather() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                try {
                    const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&appid=41fbe65d8086f214e6587cbd4edcd446`);
                    const listData = await data.json();
                    console.log(listData)
                } catch (err) {
                    console.log("error" + err);
                }
            });
        } else {
            console.log("je ne suis pas activé")
        }
    }
}
export default meteoRepository