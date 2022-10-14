import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  let service: WeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WeatherApiService);
  });

  it('should be created', () => {
    inject([HttpClient, HttpTestingController], (http: HttpClient, controller: HttpTestingController) => {
      expect(service).toBeTruthy();
    })
  });
});
