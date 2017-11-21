import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
  providers: [WeatherService],
  encapsulation: ViewEncapsulation.None
})
export class WeatherAppComponent implements OnInit {

  currentWeather: any;
  cityName: string;
  isLoading: boolean;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  checkWeather() {
    this.isLoading = true;
    this.weatherService.getWeather(this.cityName).then(
      (res) => {
        this.currentWeather = res;
        console.log(this.currentWeather);
        this.isLoading = false;
      }
    ).catch(
      (err) => {
        alert('Can not find city!');
        this.isLoading = false;
        console.log(err);
      }
    )
  }

}
