
import DefaultTemplate from "../templates/default-template";
import UserTemplateDirectory from "./userTemplateDirectory";
import ShoppingTemplate from "../templates/shopping-template";

export default class User {
  public id: Number;
  public login: String;
  public password: String;
  public fio: String;
  public userTemplateDirectories: UserTemplateDirectory[];

  constructor(id: Number, login: String, password: String, fio: String, userTemplateDirectories: UserTemplateDirectory[]) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.fio = fio;
    this.userTemplateDirectories = userTemplateDirectories;
  }

  static createEmpty() {
    return new User(null, 'ivan@gmail.com', 'password', "Ivan Ivanov", []);
  }
}
