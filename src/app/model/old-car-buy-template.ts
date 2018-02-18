import DefaultTemplate from "./default-template";

export default class OldCarBuyTemplate extends DefaultTemplate {

  constructor(id, name, listOfCheckBox) {
    super(id, name, listOfCheckBox);
  }

  static fromJSON(user: OldCarBuyTemplate): OldCarBuyTemplate {
    return new OldCarBuyTemplate(
      user.id,
      user.name,
      user.listOfCheckBox,
    );
  }
  static createEmpty() {
    return new OldCarBuyTemplate(null, 'Как купить б/у автомобиль', ['Рекомендация 1', 'Рекомендация 2', 'Рекомендация 3']);
  }
}


