import {FC} from 'react'

interface ForecastHumidityProps {
    avghumidity: number;
    totalprecip_mm: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
}

const ForecastHumidity:FC<ForecastHumidityProps> = ({
    avghumidity, 
    totalprecip_mm, 
    daily_chance_of_rain, 
    daily_chance_of_snow
}) => {
  return (
    <div className='content__child'>
        <div>Hum: {avghumidity}%</div>
        <div>Precip: {totalprecip_mm}mm</div>
        <div>{daily_chance_of_rain}% Rain</div>
        <div>{daily_chance_of_snow}% Snow</div>
    </div>
  )
}

export default ForecastHumidity