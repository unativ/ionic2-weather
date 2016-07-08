import { Page, ViewController } from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/add/add.html',
})
export class AddPage {
  public data = {
    country: 'us'
  };

  constructor(private view: ViewController) { }

  dismiss(formData) {
    this.view.dismiss(formData);
  }

}
