import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ShoppingTemplate from "../../../app/model/templates/shopping-template";

/**
 * Generated class for the ShoppingChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-checklist',
  templateUrl: 'shopping-checklist.html',
})
export class ShoppingChecklistPage {
  public checklist: ShoppingTemplate = ShoppingTemplate.createEmpty();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingChecklistPage');
  }

}
