export class DailyWeather {
    day: string;
    city: string;
    data: WeatherResponse[];
    constructor(day: string, city: string, data: WeatherResponse[]) {
        this.day = day;
        this.city = city;
        this.data = data;
    }
}

export interface ForecastResponse {
    list: WeatherResponse[];
    city: CityData;
}

export interface CityData {
    name: string;
    coord: Coordinates;
}

export interface WeatherResponse {
    coord: Coordinates;
    weather: WeatherData[];
    base: string;
    main: WeatherAttributes;
    visibility: number;
    wind: WindAttributes;
    name: string;
    dt: number;
    time: string;
}

export interface Coordinates {
    lon: number;
    lat: number;
}

export interface WeatherData {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherAttributes {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface WindAttributes {
    speed: number;
    deg: number;
    gust: number;
}

export interface RainAttributes {

}