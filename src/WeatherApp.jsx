import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 35.18,
        humidity: 19,
        temp: 36.97,
        tempMax: 36.97,
        tempMin: 36.97,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
     return(
        <div style={{textAlign:"center"}}>
            <h2><b>Your Quick WeatherApp!</b> </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
     )
}