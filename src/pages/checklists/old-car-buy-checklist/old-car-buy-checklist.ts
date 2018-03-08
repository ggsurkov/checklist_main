import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import OldCarBuyTemplate from "../../../app/model/templates/old-car-buy-template";


@IonicPage()
@Component({
  selector: 'page-old-car-buy-checklist',
  templateUrl: 'old-car-buy-checklist.html',
})
export class OldCarBuyChecklistPage {
  public checklist: OldCarBuyTemplate = OldCarBuyTemplate.createEmpty();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OldCarBuyChecklistPage');
  }

}
