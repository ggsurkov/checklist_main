import DefaultTemplate from "./default-template";

export default class ShoppingTemplate extends DefaultTemplate {

  constructor(id, name, listOfCheckBox) {
    super(id, name, listOfCheckBox);
  }

  static fromJSON(user: ShoppingTemplate): ShoppingTemplate {
    return new ShoppingTemplate(
      user.id,
      user.name,
      user.listOfCheckBox,
    );
  }
  static createEmpty() {
    return new ShoppingTemplate(null, 'Список покупок', ['Продукт 1', 'Продукт 2', 'Продукт 3']);
  }
}


