import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import ShoppingTemplate from "../../app/model/templates/shopping-template";
import User from "../../app/model/users/user";
import OldCarBuyTemplate from "../../app/model/templates/old-car-buy-template";
import {CreateChecklistPage} from "../create-checklist/create-checklist";
import TemplateSlide from "../../app/model/template-slide";
import {UserProvider} from "../../providers/user.provider";
import {CrudChecklistProvider} from "../../providers/crud-checklist.provider";
import SuperTemplate from "../../app/model/templates/super-template";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public userChecklists: SuperTemplate[] = [];

  constructor(public navCtrl: NavController,
              public crudProvider: CrudChecklistProvider) {
  }

  ngOnInit() {
   this.userChecklists = this.crudProvider.loadChecklistFromUser()
  }


  createNewChecklist() {
    this.navCtrl.push(CreateChecklistPage)
  }
  editChecklist(checklist) {
    this.navCtrl.push(checklist.pageName, {checklist: checklist})
  }
}
