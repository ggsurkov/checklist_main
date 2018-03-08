import TemplateSlide from "../template-slide";

export default abstract class SuperTemplate {
  public id: Number;
  public name: String;
  public listOfCheckBox: String [];
  public slides: TemplateSlide [];

  constructor(id: Number, name: String, listOfCheckBox: String[], slides: TemplateSlide []) {
    this.id = id;
    this.name = name;
    this.listOfCheckBox = listOfCheckBox;
    this.slides = slides;
  }

}

