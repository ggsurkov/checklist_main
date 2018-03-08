import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ShoppingTemplate from "../../app/model/templates/shopping-template";
import OldCarBuyTemplate from "../../app/model/templates/old-car-buy-template";
import UserTemplateDirectory from "../../app/model/users/userTemplateDirectory";
import User from "../../app/model/users/user";
import DefaultTemplate from "../../app/model/templates/super-template";
import {ManagerChecklistPage} from "../manager-checklist/manager-checklist";
import ListOfTemplates from "../../app/model/list-of-templates";
import TutorialTemplate from "../../app/model/templates/tutorial-template";

@IonicPage()
@Component({
  selector: 'page-create-checklist',
  templateUrl: 'create-checklist.html',
})
export class CreateChecklistPage {
  templateSelect: string = '';
  listOfTemplates: ListOfTemplates = ListOfTemplates.createEmpty();
  currentTemplate: any[] = [TutorialTemplate.createEmpty()];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
  }

  ionViewDidLoad() {

  }

  addNewChecklist() {
      this.navCtrl.push(ManagerChecklistPage, {templateName: this.templateSelect});
  }

  findSlides(selectedTemplateName) {
    this.currentTemplate = this.listOfTemplates.templates.filter(template => template.name === selectedTemplateName);
  }

}
