import SuperTemplate from "./super-template";
import TemplateSlide from "../template-slide";
import {ShoppingChecklistPage} from "../../../pages/checklists/shopping-checklist/shopping-checklist";
import {Page} from "ionic-angular/navigation/nav-util";

export default class ShoppingTemplate extends SuperTemplate {

  constructor(id, name, slides, pageName, checklistName) {
    super(id, name, slides, pageName, checklistName);
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


