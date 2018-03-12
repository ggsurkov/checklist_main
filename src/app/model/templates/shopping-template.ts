import SuperTemplate from "./super-template";
import TemplateSlide from "../template-slide";
import {ShoppingChecklistPage} from "../../../pages/checklists/shopping-checklist/shopping-checklist";
import {Page} from "ionic-angular/navigation/nav-util";

export default class ShoppingTemplate extends SuperTemplate {
  public pageName: Page;
  public checklistName: String;

  constructor(id, name, slides, pageName, checklistName) {
    super(id, name, slides);
    this.pageName = pageName;
    this.checklistName = checklistName;
  }

  static fromJSON(user: ShoppingTemplate): ShoppingTemplate {
    return new ShoppingTemplate(
      user.id,
      user.name,
      user.slides,
      user.pageName,
      user.checklistName,
    );
  }

  static createEmpty() {
    return new ShoppingTemplate(null, 'Список покупок', [
      new TemplateSlide
      ('Чеклист поможет:', ['Сэкономить время в магазине', 'Купить только нужные вещи']),
      new TemplateSlide
      ('Функции чеклиста:', ['Ничего не забыть купить!', 'Сэкономить время в магазине'])
    ], ShoppingChecklistPage, null);
  }
}


