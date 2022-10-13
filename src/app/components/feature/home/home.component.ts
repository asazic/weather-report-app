import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { DailyWeather } from 'src/app/core/model/weather-data';
import { GeolocationService } from 'src/app/core/services/geolocation.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { WeatherApiService } from 'src/app/core/services/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dailyWeather$!: Observable<DailyWeather>
  isLoading$: Subject<boolean> = this._loaderService.isLoading$;

  constructor(
    private readonly _apiService: WeatherApiService,
    private readonly _geolocationService: GeolocationService,
    private readonly _loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.dailyWeather$ = this._geolocationService.getCurrentLocation().pipe(
      switchMap((coordinates: GeolocationCoordinates) => {
        return this._apiService.getCurrentWeatherData(coordinates.latitude, coordinates.longitude);
      })
    )
  }

}
