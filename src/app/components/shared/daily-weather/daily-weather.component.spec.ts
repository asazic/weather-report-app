import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeolocationService } from 'src/app/core/services/geolocation.service';
import { WeatherApiService } from 'src/app/core/services/weather-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DailyWeatherComponent } from './daily-weather.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DailyWeatherComponent', () => {
  let component: DailyWeatherComponent;
  let fixture: ComponentFixture<DailyWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyWeatherComponent ],
      providers: [WeatherApiService, GeolocationService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
