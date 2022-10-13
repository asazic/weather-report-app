import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { DailyWeather } from 'src/app/core/model/weather-data';
import { GeolocationService } from 'src/app/core/services/geolocation.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { WeatherApiService } from 'src/app/core/services/weather-api.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecastList$!: Observable<DailyWeather[]>;
  isLoading$: Subject<boolean> = this._loaderService.isLoading$;

  constructor(
    private readonly _apiService: WeatherApiService,
    private readonly _geolocationService: GeolocationService,
    private readonly _loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.forecastList$ = this._geolocationService.getCurrentLocation().pipe(
      switchMap((coordinates: GeolocationCoordinates) => {
        return this._apiService.getFourDaysForecast(coordinates.latitude, coordinates.longitude);
      })
    )
  }

}
