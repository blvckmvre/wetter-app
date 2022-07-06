export interface ICondition {
    text: string;
    icon: string;
}

interface IDay {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_mm: number;
    avghumidity: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    condition: ICondition;
}

export interface IForecastday {
    date: string;
    day: IDay;
}

export interface IWeather {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: 1 | 0;
    condition: ICondition;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    uv: number;
}

export interface ILocation {
    name: string;
    region: string;
    country: string;
    localtime: string;
}

interface IForecast {
    forecastday: IForecastday[];
}

export interface IResponseAPI {
    location: ILocation;
    current: IWeather;
    forecast: IForecast;
}