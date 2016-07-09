import {Page, Modal, NavController} from 'ionic-angular';
import {AddPage} from '../add/add';
import {Weather} from '../../providers/weather/weather';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TempraturePipe} from '../../pipes/Temprature';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [Weather],
  pipes: [TempraturePipe]
})
export class HomePage {
  public weatherList = [];

  constructor(
    private nav: NavController,
    private weather: Weather
  ) { }

  addWeather() {
    let addWeatherModal = Modal.create(AddPage);
    addWeatherModal.onDismiss((data) => {
      if (data) {
        this.getWeather(data.city, data.country);
      }
    })
    this.nav.present(addWeatherModal);
  }

  getWeather(city: string, country: string) {
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(data => {
        this.weatherList.push(data);
      },
      err => console.log(err,
        () => console.log('getWeather completed')))
  }

  viewForecast(cityWeather) {
    console.log('view forecast');
  }
}
