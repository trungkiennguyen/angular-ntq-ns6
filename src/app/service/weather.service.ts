import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherService {

    private weatherApi = 'https://api.apixu.com/v1/current.json?key=8f226d9ba4bb4bb58ef85947171107&q=';
    constructor(private http: Http){}

    getWeather(cityName: string){
        return this.http.get(this.weatherApi+cityName).toPromise()
        .then(res => res.json())
    }
}