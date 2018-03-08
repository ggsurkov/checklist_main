import DefaultTemplate from "./default-template";
import TemplateSlide from "../template-slide";

export default class ShoppingTemplate extends DefaultTemplate {

  constructor(id, name, listOfCheckBox, slides) {
    super(id, name, listOfCheckBox, slides);
  }

  static fromJSON(user: ShoppingTemplate): ShoppingTemplate {
    return new ShoppingTemplate(
      user.id,
      user.name,
      user.listOfCheckBox,
      user.slides,
    );
  }

  static createEmpty() {
    return new ShoppingTemplate(null, 'Список покупок', ['Продукт 1', 'Продукт 2', 'Продукт 3'], [
      new TemplateSlide
      ('Чеклист поможет:', ['Ничего не забыть купить!', 'Сэкономить время в магазине']),
      new TemplateSlide
      ('Функции чеклиста:', ['Ничего не забыть купить!', 'Сэкономить время в магазине'])
    ]);
  }
}


