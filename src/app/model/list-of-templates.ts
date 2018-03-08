
import OldCarBuyTemplate from "./templates/old-car-buy-template";
import ShoppingTemplate from "./templates/shopping-template";
import TutorialTemplate from "./templates/tutorial-template";

export default class ListOfTemplates {
  public templates: any[];

  constructor(templates: any[]) {
    this.templates = templates;
  }

  static createEmpty() {
    return new ListOfTemplates
    (
      [
        OldCarBuyTemplate.createEmpty(),
        ShoppingTemplate.createEmpty(),
      ]
    )
  }
}


