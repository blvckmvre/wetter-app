import {FC} from 'react'

interface HumidityProps {
    precip_mm: number;
    humidity: number;
    cloud: number;
    vis_km: number;
}

const Humidity:FC<HumidityProps> = ({
    precip_mm,
    humidity,
    cloud,
    vis_km 
}) => {
  return (
    <div className='content__wrapper'>
        <h2>Humidity: {humidity}%</h2>
        <div>Precipitation: {precip_mm} mm</div>
        <div>Clouds: {cloud}%</div>
        <div>Visibility: {vis_km} km</div>
    </div>
  )
}

export default Humidity