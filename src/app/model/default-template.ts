export default abstract class DefaultTemplate {
  public id: Number;
  public name: String;
  public listOfCheckBox: String [];

  constructor(id: Number, name: String, listOfCheckBox: String[]) {
    this.id = id;
    this.name = name;
    this.listOfCheckBox = listOfCheckBox;
  }

}
