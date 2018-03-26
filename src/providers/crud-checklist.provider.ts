import {Injectable} from "@angular/core";
import User from "../app/model/users/user";
import SuperTemplate from "../app/model/templates/super-template";

@Injectable()

export class CrudChecklistProvider {
  user: User;

  constructor() {

  }

  saveChecklist(checklist: SuperTemplate) {
    this.user.userChecklists.push(checklist);
  }

  updateChecklist(checklist: SuperTemplate) {
    this.user.userChecklists.forEach((currentChecklist) => {
      if (currentChecklist.id === checklist.id) {
        this.saveObject(currentChecklist,checklist);
      }
    })
  }

  deleteChecklist(checklist: SuperTemplate) {
    this.user.userChecklists.splice(this.user.userChecklists.indexOf(checklist), 1);
  }

  loadChecklistFromUser() {
    return this.user.userChecklists;
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

