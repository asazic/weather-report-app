import { Component, Input, OnInit } from '@angular/core';
import { DailyWeather } from 'src/app/core/model/weather-data';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {
  @Input() dailyWeather!: DailyWeather;

  constructor() { }

  ngOnInit(): void {
  }

}
