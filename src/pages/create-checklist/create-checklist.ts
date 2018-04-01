import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ListOfTemplates from "../../app/model/list-of-templates";
import TutorialTemplate from "../../app/model/templates/tutorial-template";



@IonicPage()
@Component({
  selector: 'page-create-checklist',
  templateUrl: 'create-checklist.html',
})
export class CreateChecklistPage {
  listOfTemplates: ListOfTemplates = ListOfTemplates.createEmpty();
  currentTemplate: any[] = [TutorialTemplate.createEmpty()];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
  }

  ionViewDidLoad() {
  }

  addNewChecklist() {
      this.navCtrl.push(this.currentTemplate[0].pageName);
  }

  findSlides(selectedTemplateName) {
    this.currentTemplate = this.listOfTemplates.templates.filter(template => template.name === selectedTemplateName);
  }

}
