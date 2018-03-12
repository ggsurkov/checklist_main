import SuperTemplate from "./super-template";
import TemplateSlide from "../template-slide";

export default class TutorialTemplate extends SuperTemplate {

  constructor(id, name, slides) {
    super(id, name, slides);
  }

  static fromJSON(user: TutorialTemplate): TutorialTemplate {
    return new TutorialTemplate(
      user.id,
      user.name,
      user.slides,
    );
  }

  static createEmpty() {
    return new TutorialTemplate(null, 'Подсказка', [
      new TemplateSlide
      ('Выберите шаблон из списка ниже и вы узнаете:', ['Чем выбранный чеклист вам сможет помочь', 'Его уникальный функционал', 'После выбора заведите имя чеклисту и нажмите кнопку ✓']),
    ]);
  }
}


