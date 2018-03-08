import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ShoppingTemplate from "../../app/model/templates/shopping-template";
import OldCarBuyTemplate from "../../app/model/templates/old-car-buy-template";
import UserTemplateDirectory from "../../app/model/users/userTemplateDirectory";
import User from "../../app/model/users/user";
import DefaultTemplate from "../../app/model/templates/default-template";
import {ManagerChecklistPage} from "../manager-checklist/manager-checklist";

@IonicPage()
@Component({
  selector: 'page-create-checklist',
  templateUrl: 'create-checklist.html',
})
export class CreateChecklistPage {
  templateSelect: string = 'defaultChecklist';
  slides = [
    {
      title: "Чеклист поможет:",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/slide-img.jpg",
    },
    {
      title: "Функции чеклиста:",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/slide-img.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
  }
  ionViewDidLoad() {

  }

  addNewChecklist() {
      this.navCtrl.push(ManagerChecklistPage, {templateName: this.templateSelect});
  }
}
