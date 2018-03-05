import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ShoppingTemplate from "../../app/model/shopping-template";
import OldCarBuyTemplate from "../../app/model/old-car-buy-template";
import UserTemplateDirectory from "../../app/model/users/userTemplateDirectory";
import User from "../../app/model/users/user";
import DefaultTemplate from "../../app/model/default-template";
import {ManagerChecklistPage} from "../manager-checklist/manager-checklist";

@IonicPage()
@Component({
  selector: 'page-create-checklist',
  templateUrl: 'create-checklist.html',
})
export class CreateChecklistPage {
  templateSelect: string = 'defaultChecklist';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
  }
  ionViewDidLoad() {

  }

  addNewChecklist() {
      this.navCtrl.push(ManagerChecklistPage, {templateName: this.templateSelect});
    console.log(this.templateSelect);
  }
}
