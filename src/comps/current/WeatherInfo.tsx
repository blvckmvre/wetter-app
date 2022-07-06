import {FC} from 'react'
import { IWeather } from '../../types/weather-types'
import FeelsLike from './FeelsLike';
import GeneralInfo from './GeneralInfo'
import Humidity from './Humidity';
import WindInfo from './WindInfo'

interface WeatherInfoProps {
    weather: IWeather;
    toggleFahrenheit: ()=>void;
    isFahrenheit: boolean;
}

const WeatherInfo:FC<WeatherInfoProps> = ({weather, isFahrenheit, toggleFahrenheit}) => {
  return (
    <div className='weather__wrapper'>
        <GeneralInfo 
            temp_c={weather.temp_c}
            temp_f={weather.temp_f}
            is_day={weather.is_day}
            condition={weather.condition}
            isFahrenheit={isFahrenheit}
        />
        <WindInfo 
            wind_degree={weather.wind_degree}
            wind_dir={weather.wind_dir}
            wind_kph={weather.wind_kph}
        />
        <FeelsLike 
            feels_like_c={weather.feelslike_c}
            feels_like_f={weather.feelslike_f}
            pressure_mb={weather.pressure_mb}
            isFahrenheit={isFahrenheit}
            uv={weather.uv}
        />
        <Humidity 
            humidity={weather.humidity}
            cloud={weather.cloud}
            precip_mm={weather.precip_mm}
            vis_km={weather.vis_km}
        />
        <div className='bottom__block'>
            <button 
                className='btn'
                onClick={toggleFahrenheit}
            >°C / °F</button>
            <div>Last update: {weather.last_updated}</div>
        </div>
    </div>
  )
}

export default WeatherInfo