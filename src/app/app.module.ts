import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { HomeComponent } from './components/feature/home/home.component';
import { ForecastComponent } from './components/feature/forecast/forecast.component';
import { WeatherApiService } from './core/services/weather-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyBinderInterceptor } from './core/interceptors/api-key-binder-interceptor';
import { MaterialModule } from './core/modules/material.module';
import { DailyWeatherComponent } from './components/shared/daily-weather/daily-weather.component';
import { TimePipe } from './core/pipes/time.pipe';
import { LoaderService } from './core/services/loader.service';
import { LoaderInterceptor } from './core/interceptors/loader-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    ForecastComponent,
    DailyWeatherComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    WeatherApiService,
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiKeyBinderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
