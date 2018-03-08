import templateSlide from "../template-slide";

export default abstract class DefaultTemplate {
  public id: Number;
  public name: String;
  public listOfCheckBox: String [];
  public slides: templateSlide [];

  constructor(id: Number, name: String, listOfCheckBox: String[], slides: templateSlide []) {
    this.id = id;
    this.name = name;
    this.listOfCheckBox = listOfCheckBox;
    this.slides = slides;
  }

}

