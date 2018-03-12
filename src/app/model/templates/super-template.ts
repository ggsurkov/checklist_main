import TemplateSlide from "../template-slide";

export default abstract class SuperTemplate {
  public id: Number;
  public name: String;
  public slides: TemplateSlide [];

  constructor(id: Number, name: String, slides: TemplateSlide []) {
    this.id = id;
    this.name = name;
    this.slides = slides;
  }

}

