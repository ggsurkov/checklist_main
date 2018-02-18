
import DefaultTemplate from "../default-template";
import ShoppingTemplate from "../shopping-template";

export default class UserTemplateDirectory {
  public name: String;
  public userTemplates: ShoppingTemplate[];

  constructor(name: String, userTemplates: ShoppingTemplate[]) {
    this.name = name;
    this.userTemplates = userTemplates;
  }

}
