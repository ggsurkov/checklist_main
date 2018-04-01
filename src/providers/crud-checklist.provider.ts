import {Injectable} from "@angular/core";
import User from "../app/model/users/user";
import SuperTemplate from "../app/model/templates/super-template";
import {Md5} from "ts-md5";
declare let require: any;
const localforage: LocalForage = require("localforage");

@Injectable()

export class CrudChecklistProvider {
 public userChecklistFromStorage: SuperTemplate[] = [];
  public user: User = User.createEmpty();

  constructor(private _md5: Md5) {
  }
  public setChecklistsToLocalStorage(checklists) {
    localforage.setItem("checklist", checklists);
  }

  public getChecklistsFromLocalStorage() {
    localforage.getItem("checklist").then((result) => {
      this.userChecklistFromStorage = result ? <Array<SuperTemplate>> result : [];
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }
  saveChecklist(checklist) {
    this.getChecklistsFromLocalStorage();
    checklist.id = this._md5.appendStr('password').end();
    this.userChecklistFromStorage.push(checklist);
    this.setChecklistsToLocalStorage(this.userChecklistFromStorage);
  }

  updateChecklist(checklist: SuperTemplate) {
    this.getChecklistsFromLocalStorage();
    this.userChecklistFromStorage.forEach((currentChecklist) => {
      if (currentChecklist.id === checklist.id) {
        this.saveObject(currentChecklist,checklist);
      }
    });
    this.setChecklistsToLocalStorage(this.userChecklistFromStorage);
  }


  deleteChecklist(checklist: SuperTemplate) {
    this.getChecklistsFromLocalStorage();
    this.userChecklistFromStorage.splice(this.userChecklistFromStorage.indexOf(checklist), 1);
    this.setChecklistsToLocalStorage(this.userChecklistFromStorage);
  }
  cloneObject(obj) {
    let newObj = {};

    for (let prop in obj) {
      if (typeof obj[prop] == 'object') {
        newObj[prop] = this.cloneObject(obj[prop]);
      } else {
        newObj[prop] = obj[prop];
      }
    }

    return newObj;
  }

  saveObject(firstObj, SecondObj) {
    for (let key in SecondObj) {
      firstObj[key] = SecondObj[key];
    }
    return SecondObj
  }

}

