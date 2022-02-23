import React from "react";

export default function Card(props) {
    function format(days,format) {
        if(format === "long") {
            let options = { weekday: 'long', month: 'long', day: 'numeric'}
            let currentDate = new Date();
            return addDaysToDate(currentDate, days).toLocaleDateString([],options);
        }
        else{
            let options = { weekday: 'long'}
            let currentDate = new Date();
            return addDaysToDate(currentDate, days).toLocaleDateString([],options);
        }
    }
    function addDaysToDate(date, days) {
        var dt = new Date(date);
        dt.setDate(dt.getDate() + days);
        return dt;
    }

    return (
        <main className="position">
            <div className="position__information container">
                <div className="position__information-date">
                    <h2>{format(0,"long")}</h2>
                </div>
                <div className="position__information-city">
                    <h2>{props.name}</h2>
                    <h3>{Math.floor(props.temp - 273.15)}°</h3>
                </div>
                <div className="position__information-prevision">
                    {props.listPrevision != null ? props.listPrevision.map((jour,index) => {
                            console.log(jour)
                            return <div className="position__information-prevision-day">
                                <h4>{format(index+1,"court")}</h4>
                                <span className="icon"><img src={`./img/svg/${jour.weather[0].icon}.svg`}></img></span>
                                <span>{Math.floor(jour.temp.day - 273.15) }°</span>
                            </div>
                        }) : null }
                </div>
            </div>
            <div className="position__image" style={{backgroundImage: `url(/img/${props.weather}.jpg)`}}>
            </div>
        </main>
    );
}