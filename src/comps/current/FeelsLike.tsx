import {FC} from 'react'

interface FeelsLikeProps {
    feels_like_c: number;
    feels_like_f: number;
    pressure_mb: number;
    isFahrenheit: boolean;
    uv: number;
}

const FeelsLike:FC<FeelsLikeProps> = ({
    feels_like_c,
    feels_like_f,
    pressure_mb,
    isFahrenheit,
    uv
}) => {
  return (
    <div className='content__wrapper'>
        <h2>
            Feels Like: {isFahrenheit ?
            feels_like_f+' °F' :
            feels_like_c+' °C'}
        </h2>
        <div>
            Pressure: {pressure_mb} mbar
        </div>
        <div>UV-index: {uv}</div>
    </div>
  )
}

export default FeelsLike