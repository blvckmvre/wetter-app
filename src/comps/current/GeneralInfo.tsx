import {FC} from 'react';
import { ICondition } from '../../types/weather-types';

interface GeneralInfoProps {
    temp_c: number;
    temp_f: number;
    is_day: 0 | 1;
    condition: ICondition;
    isFahrenheit: boolean;
}

const GeneralInfo:FC<GeneralInfoProps> = ({ 
    temp_c, 
    temp_f, 
    is_day, 
    condition,
    isFahrenheit
}) => {
  return (
    <div className='content__wrapper'>
        <div className='content__child'>
            <img src={'https:'+condition.icon} alt=''></img>
            <h2>{condition.text}</h2>
        </div>
         <h2>
            {isFahrenheit ?
            temp_f+' °F' :
            temp_c+' °C'}
        </h2>
        <h2>
            {is_day ? 'Day' : 'Night'}
        </h2>
    </div>
  )
}

export default GeneralInfo