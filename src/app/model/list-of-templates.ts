import OldCarBuyTemplate from "./old-car-buy-template";
import ShoppingTemplate from "./shopping-template";

export default class ListOfTemplates {
  public templates: [];

  constructor(templates: []) {
    this.templates = templates;
  }

  static createEmpty() {
    return new ListOfTemplates
    (
      [
        new OldCarBuyTemplate.createEmpty(),
        new ShoppingTemplate.createEmpty()
      ]
    )
  }
}


