import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import ShoppingTemplate from "../../app/model/templates/shopping-template";
import User from "../../app/model/users/user";
import OldCarBuyTemplate from "../../app/model/templates/old-car-buy-template";
import {CreateChecklistPage} from "../create-checklist/create-checklist";
import TemplateSlide from "../../app/model/template-slide";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  user: User = new User(1, 'login', 'password', 'Ivan Ivanov', []);


  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  }


  createNewChecklist() {
    this.navCtrl.push(CreateChecklistPage)
  }
}
