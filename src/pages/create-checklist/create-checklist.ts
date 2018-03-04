import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ShoppingTemplate from "../../app/model/shopping-template";
import OldCarBuyTemplate from "../../app/model/old-car-buy-template";
import UserTemplateDirectory from "../../app/model/users/userTemplateDirectory";
import User from "../../app/model/users/user";
import DefaultTemplate from "../../app/model/default-template";

@IonicPage()
@Component({
  selector: 'page-create-checklist',
  templateUrl: 'create-checklist.html',
})
export class CreateChecklistPage {
  userTemplateDirectoriesNameArray: any = {
    'templates': ['1','2']
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
  }
  ionViewDidLoad() {

  }

  addNewChecklist() {

  }
}
