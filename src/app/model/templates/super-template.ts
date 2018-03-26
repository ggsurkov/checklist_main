import TemplateSlide from "../template-slide";
import {Page} from "ionic-angular/umd/navigation/nav-util";

export default abstract class SuperTemplate {
  public id: Number;
  public name: String;
  public slides: TemplateSlide [];
  public pageName: Page;
  public userChecklistName: String;
  public mainInfo: String[];

  constructor(id: Number, name: String, slides: TemplateSlide [], pageName: Page, userChecklistName: String, mainInfo: String[]) {
    this.id = id;
    this.name = name;
    this.slides = slides;
    this.pageName = pageName;
    this.userChecklistName = userChecklistName;
    this.mainInfo = mainInfo;
  }

}

