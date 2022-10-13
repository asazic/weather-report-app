import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable, tap } from "rxjs";
import { DailyWeatherComponent } from "src/app/components/shared/daily-weather/daily-weather.component";
import { environment } from 'src/environments/environment';
import { DailyWeather, ForecastResponse, WeatherResponse } from "../model/weather-data";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private readonly API_BASE_URL: string = environment.apiBaseUrl;

  constructor(private readonly httpClient: HttpClient) { }

  public getCurrentWeatherData(lat: number, lon: number): Observable<DailyWeather> {
    const url: string = `${this.API_BASE_URL}/weather?lat=${lat}&lon=${lon}`;
    return this.httpClient.get<WeatherResponse>(url).pipe(
      map(data => {
        var dayname = new Date(data.dt * 1000).toLocaleDateString("en", {
          weekday: "long",
        });
        let daily: DailyWeather = new DailyWeather(dayname, data.name, [data]);
        return daily;
      })
    )
  }

  public getFourDaysForecast(lat: number, lon: number): Observable<DailyWeather[]> {
    const url: string = `${this.API_BASE_URL}/forecast?lat=${lat}&lon=${lon}`;
    return this.httpClient.get<ForecastResponse>(url).pipe(
      map(data => {
        let dailys: DailyWeather[] = [];
        data.list.forEach(dayData => {
          var dayname = new Date(dayData.dt * 1000).toLocaleDateString("en", {
            weekday: "long",
          });
          let dailyIndex = dailys.findIndex(x => x.day === dayname);
          if(dailyIndex != -1) {
            dailys[dailyIndex].data.push(dayData);
          } else {
            dailys.push(new DailyWeather(dayname, data.city.name, [dayData]));
          }
        })
        return dailys;
      })
    );
  }
}
