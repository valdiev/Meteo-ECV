// const meteoRepository = {
//     async getWeather() {
//         try {
//             const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&appid=41fbe65d8086f214e6587cbd4edcd446`);
//             const listData = await data.json()
//             return listData
//         } catch (err) {
//             console.log("error" + err);
//         }
//     }
// }
// export default meteoRepository