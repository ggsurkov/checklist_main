import SuperTemplate from "./super-template";
import {default as TemplateSlide} from "../template-slide";
import {Page} from "ionic-angular/navigation/nav-util";
import {OldCarBuyChecklistPage} from "../../../pages/checklists/old-car-buy-checklist/old-car-buy-checklist";

export default class OldCarBuyTemplate extends SuperTemplate {
  public pageName: Page;
  public checklistName: String;

  constructor(id, name, listOfCheckBox, slides, pageName, checklistName) {
    super(id, name, listOfCheckBox, slides);
    this.pageName = pageName;
    this.checklistName = checklistName;
  }

  static fromJSON(user: OldCarBuyTemplate): OldCarBuyTemplate {
    return new OldCarBuyTemplate(
      user.id,
      user.name,
      user.listOfCheckBox,
      user.slides,
      user.pageName,
      user.checklistName,
    );
  }

  static createEmpty() {
    return new OldCarBuyTemplate(null, 'Как купить б/у автомобиль', ['Рекомендация 1', 'Рекомендация 2', 'Рекомендация 3'],
      [
        new TemplateSlide
        ('Чеклист поможет:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"']),
        new TemplateSlide
        ('Функции чеклиста:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"'])
      ], OldCarBuyChecklistPage, null);
  }
}


