import axios from 'axios';
import {FC, useEffect, useRef, useState} from 'react'
import { useRequest } from '../hooks/useRequest';
import { IForecastday, ILocation, IResponseAPI, IWeather } from '../types/weather-types';
import GeoLocation from './current/GeoLocation';
import Loading from './ui/loading/Loading';
import WeatherInfo from './current/WeatherInfo';
import ForecastItem from './forecast/ForecastItem';

const WeatherBar:FC = () => {
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [location, setLocation] = useState<ILocation | null>(null);
    const [forecast, setForecast] = useState<IForecastday[]>([]);
    const [page, setPage] = useState<1 | 2>(1);
    const [isFahrenheit, setFahrenheit] = useState<boolean>(false);

    const currentWeather = useRef<any>();
    const forecastWeather = useRef<any>();

    const fetchIP = async() => {
        const res = await axios.get<string>(process.env.REACT_APP_IP_URL!);
        return res.data;
    }

    const fetchWeatherData = async() => {
        const ip = await fetchIP();
        const res = await axios.get<IResponseAPI>(
            `${process.env.REACT_APP_WEATHER_URL}?key=${process.env.REACT_APP_API_KEY}&q=${ip}&days=3&aqi=no&alerts=no`
        );
        setWeather(res.data.current);
        setLocation(res.data.location);
        setForecast(res.data.forecast.forecastday)
    }
    const [requestWeather, isLoading, error] = useRequest(fetchWeatherData);

    const toggleFahrenheit = () => {
        if(isFahrenheit)
            setFahrenheit(false);
        else 
            setFahrenheit(true);
    }

    const moveToForecast = () => {
        currentWeather.current.classList.add('current__transition');
        setTimeout(()=>{
            currentWeather.current.classList.remove('current__transition');
            setPage(2);
        },250)
    }
    const moveToCurrent = () => {
        forecastWeather.current.classList.add('current__transition');
        setTimeout(()=>{
            forecastWeather.current.classList.remove('current__transition');
            setPage(1);
        },250)
    }

    useEffect(()=>{
        requestWeather()
    },[])

    if(page===1)
  return (
    <div ref={currentWeather} className='bar__wrapper'>
        {isLoading && <Loading />}
        {error && <h1>{error}</h1>}
        <div className='desc'>
            Powered by <a 
                className='desclink' target='_blank' rel="noreferrer"
                href="https://www.weatherapi.com/" 
                title="Weather API"
            >WeatherAPI.com</a>
        </div>
        <img
            className='updatebtn'
            src={require('../assets/refresh.svg').default}
            alt=''
            onClick={requestWeather}
        ></img>
        {location && <GeoLocation location={location} />}
        {weather && <WeatherInfo 
            weather={weather}
            isFahrenheit={isFahrenheit}
            toggleFahrenheit={toggleFahrenheit}
        />}
        <button 
            className='movedownbtn'
            onClick={moveToForecast}
        >v</button>
    </div>
  )
    if(page===2)
  return (
    <div ref={forecastWeather} className='bar__wrapper'>
        {isLoading && <Loading />}
        {error && <h1>{error}</h1>}
        <div className='desc'>
            Powered by <a 
                className='desclink' target='_blank' rel="noreferrer"
                href="https://www.weatherapi.com/" 
                title="Weather API"
            >WeatherAPI.com</a>
        </div>
        <img
            className='updatebtn'
            src={require('../assets/refresh.svg').default}
            alt=''
            onClick={requestWeather}
        ></img>
        {forecast.length && forecast.map(it=>
            <ForecastItem 
                key={it.date} 
                forecastday={it} 
                isFahrenheit={isFahrenheit}
            />
        )}
        <button 
            className='btn'
            onClick={toggleFahrenheit}
        >°C / °F</button>
        <button 
            className='movedownbtn'
            onClick={moveToCurrent}
        >v</button>
    </div>
  )
  return <></>

}

export default WeatherBar