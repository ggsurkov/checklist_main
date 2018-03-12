import SuperTemplate from "./super-template";
import {default as TemplateSlide} from "../template-slide";
import {Page} from "ionic-angular/navigation/nav-util";
import {OldCarBuyChecklistPage} from "../../../pages/checklists/old-car-buy-checklist/old-car-buy-checklist";

export default class OldCarBuyTemplate extends SuperTemplate {
  public pageName: Page;
  public userChecklistName: String;
  public mainInfo: String[];
  public documents: boolean[];
  public outerInspection: boolean[];
  public tyres: boolean[];
  public engine: boolean[];
  public suspension: boolean[];
  public interior: boolean[];
  public carBody: boolean[];
  public autoTransmission: boolean[];
  public mechTransmission: boolean[];
  public carBrakes: boolean[];
  public carSteering: boolean[];
  public note: String;

  constructor(id, name, slides, pageName, checklistName, mainInfo,
              documents, outerInspection, tyres, engine, suspension,
              interior, carBody, autoTransmission, mechTransmission, carBrakes, carSteering, note) {

    super(id, name, slides);
    this.pageName = pageName;
    this.userChecklistName = checklistName;
    this.mainInfo = mainInfo;
    this.documents = documents;
    this.outerInspection = outerInspection;
    this.tyres = tyres;
    this.engine = engine;
    this.suspension = suspension;
    this.interior = interior;
    this.carBody = carBody;
    this.autoTransmission = autoTransmission;
    this.mechTransmission = mechTransmission;
    this.carBrakes = carBrakes;
    this.carSteering = carSteering;
    this.note = note;
  }

  static fromJSON(user: OldCarBuyTemplate): OldCarBuyTemplate {
    return new OldCarBuyTemplate(
      user.id,
      user.name,
      user.slides,
      user.pageName,
      user.userChecklistName,
      user.mainInfo,
      user.documents,
      user.outerInspection,
      user.tyres,
      user.engine,
      user.suspension,
      user.interior,
      user.carBody,
      user.autoTransmission,
      user.mechTransmission,
      user.carBrakes,
      user.carSteering,
      user.note,
    );
  }

  static createEmpty() {
    return new OldCarBuyTemplate(null, 'Как купить б/у автомобиль',
      [
        new TemplateSlide
        ('Чеклист поможет:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"']),
        new TemplateSlide
        ('Функции чеклиста:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"'])
      ], OldCarBuyChecklistPage, null, [],[],[],[],[],[],[],[],[],[],[],[],'');
  }
}


class mainInfo {
  public name: String;
  public checkboxes: boolean [];

  constructor(name: String, checkboxes: boolean[]) {

  }
}
