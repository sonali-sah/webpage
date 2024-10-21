import { useState } from "react";
import SearchBox from "./SearchBox";
 import InfoBox from "./infoBox";



export default function( {info} ) {

    const [weatherInfo, setWeatherInfo] = useState({
            city: "Wonderland",
            feelsLike: 34.66,
            humidity: 79,
            temp: 29.05,
            tempMax: 29.05,
            tempMin: "mist"   
        
    });

    let updateInfo =  (newInfo) => {
         setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}