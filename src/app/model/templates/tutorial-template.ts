import SuperTemplate from "./super-template";
import TemplateSlide from "../template-slide";

export default class TutorialTemplate extends SuperTemplate {

  constructor(id, name, slides, pageName, userChecklistName, mainInfo) {
    super(id, name, slides, pageName, userChecklistName, mainInfo);
  }


  static createEmpty() {
    return new TutorialTemplate(null, 'Подсказка', [
      new TemplateSlide
      ('Выберите шаблон из списка и вы узнаете:', ['Чем выбранный чеклист вам сможет помочь', 'Его уникальный функционал', 'Для создания чеклиста нажмите кнопку ✓']),
    ], null, null, []);
  }
}


