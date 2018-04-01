import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import OldCarBuyTemplate from "../../app/model/templates/old-car-buy-template";
import {CreateChecklistPage} from "../create-checklist/create-checklist";
import {CrudChecklistProvider} from "../../providers/crud-checklist.provider";
import SuperTemplate from "../../app/model/templates/super-template";

declare let require: any;
const localforage: LocalForage = require("localforage");

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  userChecklistFromStorage: SuperTemplate[];

  constructor(public navCtrl: NavController,
              public crudProvider: CrudChecklistProvider,
              public alertCtrl: AlertController) {
  }


  ngOnInit() {
    this.loadChecklistFromUser();
  }

  loadChecklistFromUser() {
    localforage.getItem("checklist").then((result) => {
      this.userChecklistFromStorage = result ? <Array<SuperTemplate>> result : [];
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  createNewChecklist() {
    this.navCtrl.push(CreateChecklistPage)
  }

  editChecklist(checklist) {
    this.navCtrl.push(checklist.pageName, {checklist: checklist})
  }

  openModalDeleteChecklist(checklist) {
    let alert = this.alertCtrl.create({
      message: 'Удалить чеклист?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.crudProvider.deleteChecklist(checklist);
            this.loadChecklistFromUser();
          }
        }
      ]
    });
    alert.present();
  }

  resetLocalStorage() {
    localforage.clear().then(function () {
      // Run this code once the database has been entirely deleted.
      console.log('Database is now empty.');
    }).catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
  }

}
