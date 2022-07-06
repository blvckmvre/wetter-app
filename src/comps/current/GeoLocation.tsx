import {FC} from 'react';
import { ILocation } from '../../types/weather-types';

interface GeoLocationProps {
  location: ILocation;
}

const GeoLocation:FC<GeoLocationProps> = ({location}) => {
  return (
    <div className='content__wrapper'>
      <h1>{location.name}</h1>
      <h3>{location.localtime}</h3>
      <div className='content__child'>
        <div>{location.region},</div>
        <div>{location.country}</div>
      </div>
    </div>
  )
}

export default GeoLocation;