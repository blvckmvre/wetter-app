import {FC} from 'react';

interface WindInfoProps {
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
}

const WindInfo:FC<WindInfoProps> = ({wind_kph, wind_degree, wind_dir}) => {
  return (
    <div className='content__wrapper'>
      <h2>Wind: {wind_kph} k/h</h2>
      <img 
        width='60'
        src={require('../../assets/direction.svg').default} 
        alt=''
        style={{transform: `rotate(${wind_degree}deg)`}}
      ></img>
      <div className='content__child'>
        <div>{wind_dir}</div>
        <div>{wind_degree} °</div>
      </div>
    </div>
  )
}

export default WindInfo;