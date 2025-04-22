import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = import.meta.env.VITE_INIT_URL;
    const COLD_URL = import.meta.env.VITE_COLD_URL;
    const RAIN_URL = import.meta.env.VITE_RAIN_URL;
    const HOT_URL = import.meta.env.VITE_HOT_URL;
    

    const getImageForWeather = () => {
        const { temp, humidity, weather } = info;
        const lowerWeather = weather.toLowerCase();
    
        if (lowerWeather.includes("rain") || (humidity >= 80)) {
            return RAIN_URL; // rainy
        } else if (temp >= 30) {
           return HOT_URL;
        } else if (temp < 15) {
            return COLD_URL; // cold/snowy
        } else {
            return HOT_URL; // mild/normal
        }
    };
    
    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 170 }}
                    image={getImageForWeather()}
                    title={`Weather in ${info.city}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    &nbsp;&nbsp;
                    {
                        info.humidity > 80
                        ? <ThunderstormIcon />
                        : info.temp > 15
                        ? <WbSunnyIcon />
                        : <AcUnitIcon />
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}</p>
                    <p>Max Temp = {info.tempMax}</p>
                    <p>
                        The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                    </p>
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    )
}