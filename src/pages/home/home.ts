import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import ShoppingTemplate from "../../app/model/shopping-template";
import User from "../../app/model/users/user";
import UserTemplateDirectory from "../../app/model/users/userTemplateDirectory";
import OldCarBuyTemplate from "../../app/model/old-car-buy-template";
import {CreateChecklistPage} from "../create-checklist/create-checklist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  userTemplate1: ShoppingTemplate = new ShoppingTemplate(null, 'Масленица', []);
  userTemplate2: ShoppingTemplate = new ShoppingTemplate(null, 'Пятерочка, выходные', []);
  userTemplate3: OldCarBuyTemplate = new OldCarBuyTemplate(null, 'Volvo XC90 на ул. Строителей 16', []);
  userTemplateDirectory1: UserTemplateDirectory = new UserTemplateDirectory('Списки покупок', []);
  userTemplateDirectory2: UserTemplateDirectory = new UserTemplateDirectory('Как купить б/у авто', []);
  user: User = new User(1, 'login', 'password', 'Ivan Ivanov', []);


  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.userTemplateDirectory1.userTemplates = this.userTemplateDirectory1.userTemplates.concat(this.userTemplate1);
    this.userTemplateDirectory1.userTemplates = this.userTemplateDirectory1.userTemplates.concat(this.userTemplate2);
    this.userTemplateDirectory2.userTemplates = this.userTemplateDirectory2.userTemplates.concat(this.userTemplate3);
    this.user.userTemplateDirectories = this.user.userTemplateDirectories.concat(this.userTemplateDirectory1);
    this.user.userTemplateDirectories = this.user.userTemplateDirectories.concat(this.userTemplateDirectory2);
  }


  createNewChecklist() {
    this.navCtrl.push(CreateChecklistPage)
  }
}
