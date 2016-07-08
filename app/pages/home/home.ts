import {Page, Modal, NavController} from 'ionic-angular';
import {AddPage} from '../add/add';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public weatherList = [];

  constructor(private nav: NavController) { }

  addWeather() {
    let addWeatherModal = Modal.create(AddPage);
    addWeatherModal.onDismiss((data) => {
      this.weatherList.push(data);
    })
    this.nav.present(addWeatherModal);
  }
}
