import {FC} from 'react'
import { ICondition } from '../../types/weather-types'

interface ForecastConditionProps {
    condition: ICondition
}

const ForecastCondition:FC<ForecastConditionProps> = ({condition}) => {
  return (
    <div className='content__child'>
        <img src={'https:'+condition.icon} alt=''></img>
        {condition.text}
    </div>
  )
}

export default ForecastCondition