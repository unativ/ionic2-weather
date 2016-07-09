import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class Weather {
  private appId = '052131bb0e910b1bb06874957d2bb29d';
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(private http: Http) {}

  city(city: string, country: string) {
      let url = this.baseUrl + 'weather';
      url += '?appId=' + this.appId;
      url += '&q=' + city;
      url += ',' + country;

      return this.http.get(url);
  }

}
