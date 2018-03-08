import SuperTemplate from "./super-template";
import {default as TemplateSlide} from "../template-slide";

export default class OldCarBuyTemplate extends SuperTemplate {

  constructor(id, name, listOfCheckBox, slides) {
    super(id, name, listOfCheckBox, slides);
  }

  static fromJSON(user: OldCarBuyTemplate): OldCarBuyTemplate {
    return new OldCarBuyTemplate(
      user.id,
      user.name,
      user.listOfCheckBox,
      user.slides,
    );
  }

  static createEmpty() {
    return new OldCarBuyTemplate(null, 'Как купить б/у автомобиль', ['Рекомендация 1', 'Рекомендация 2', 'Рекомендация 3'],
      [
        new TemplateSlide
        ('Чеклист поможет:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"']),
        new TemplateSlide
        ('Функции чеклиста:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"'])
      ]);
  }
}


