import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

  apiKey= '8b4d48ead892cde8679e4abd869b8fdf';

  url;
  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  }


  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());

  }


}