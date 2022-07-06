import {FC} from 'react'
import { IForecastday } from '../../types/weather-types'
import ForecastCondition from './ForecastCondition'
import ForecastHumidity from './ForecastHumidity'

interface ForecastItemProps {
    forecastday: IForecastday;
    isFahrenheit: boolean;
}

const ForecastItem:FC<ForecastItemProps> = ({forecastday, isFahrenheit}) => {
  return (
    <div className='content__wrapper forecast'>
        {forecastday.date}
        <ForecastCondition 
            condition={forecastday.day.condition}
        />
        <div className='content__child'>
           { isFahrenheit ? 
           `${forecastday.day.mintemp_f}°F – ${forecastday.day.maxtemp_f}°F` :
           `${forecastday.day.mintemp_c}°C – ${forecastday.day.maxtemp_c}°C`}
        </div>
        <ForecastHumidity 
            avghumidity={forecastday.day.avghumidity}
            totalprecip_mm={forecastday.day.totalprecip_mm}
            daily_chance_of_rain={forecastday.day.daily_chance_of_rain}
            daily_chance_of_snow={forecastday.day.daily_chance_of_snow}
        />
    </div>
  )
}

export default ForecastItem