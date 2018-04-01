import SuperTemplate from "./super-template";
import {default as TemplateSlide} from "../template-slide";
import {OldCarBuyChecklistPage} from "../../../pages/checklists/old-car-buy-checklist/old-car-buy-checklist";

export default class OldCarBuyTemplate extends SuperTemplate {
  public mainInfo: String[];
  public documents: Boolean[];
  public outerInspection: Boolean[];
  public tyres: Boolean[];
  public engine: Boolean[];
  public suspension: Boolean[];
  public interior: Boolean[];
  public carBody: Boolean[];
  public transmission: Boolean[];
  public carBrakes: Boolean[];
  public carSteering: Boolean[];
  public note: String;

  constructor(id, name,
              slides,
              pageName, userChecklistName, mainInfo,
              documents,
              outerInspection, tyres, engine, suspension,
              interior, carBody, transmission, carBrakes, carSteering,
              note) {

    super(id, name,
      slides,
      pageName, userChecklistName);
    this.mainInfo = mainInfo;
    this.documents = documents;
    this.outerInspection = outerInspection;
    this.tyres = tyres;
    this.engine = engine;
    this.suspension = suspension;
    this.interior = interior;
    this.carBody = carBody;
    this.transmission = transmission;
    this.carBrakes = carBrakes;
    this.carSteering = carSteering;
    this.note = note;
  }

  static createEmpty() {
    return new OldCarBuyTemplate(null, 'Как купить б/у автомобиль',
      [
        new TemplateSlide
        ('Чеклист поможет:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"']),
        new TemplateSlide
        ('Функции чеклиста:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"'])
      ],
       'OldCarBuyChecklistPage', 'Новый чеклист',
      ['ФИО владельца','89991112233','Место встречи с владельцем', 'Марка авто','1998','30000','500000'],

      [false,false,false,false],

      [false, false,false,false,false, false,false,false,false, false],

      [false, false,false,false,false, false],

      [false, false,false,false,false, false],

      [false, false,false],

      [false, false,false,false,false, false,false, false,false,false,false, false,false, false,false,false,false, false],

      [false, false,false],

      [false, false,false,false],

      [false, false,false,false],

      [false, false,false,false],

      null);
  }

}

class MainInfo {
  public masterLastName: String;
  public masterPhone: String;
  public placeOfMeeting: String;
  public carBrand: String;
  public carAge: String;
  public carMileAge: String;
  public carPrice: String;
  constructor(masterLastName: String, masterPhone: String,placeOfMeeting: String,carBrand: String,carAge: String, carMileAge: String, carPrice: String) {
    this.masterLastName = masterLastName;
    this.masterPhone = masterPhone;
    this.placeOfMeeting = placeOfMeeting;
    this.carBrand = carBrand;
    this.carAge = carAge;
    this.carMileAge = carMileAge;
    this.carPrice = carPrice;
  }
}
// class Documents {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean,checkboxe3: boolean,checkboxe4: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//   }
// }

// class OuterInspection {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//   public checkboxe5: boolean;
//   public checkboxe6: boolean;
//   public checkboxe7: boolean;
//   public checkboxe8: boolean;
//   public checkboxe9: boolean;
//   public checkboxe10: boolean;
//
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean,checkboxe3: boolean,checkboxe4: boolean, checkboxe5: boolean, checkboxe6: boolean,checkboxe7: boolean,checkboxe8: boolean, checkboxe9: boolean, checkboxe10: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//     this.checkboxe5 = checkboxe5;
//     this.checkboxe6 = checkboxe6;
//     this.checkboxe7 = checkboxe7;
//     this.checkboxe8 = checkboxe8;
//     this.checkboxe9 = checkboxe9;
//     this.checkboxe10 = checkboxe10;
//   }
// }
//
// class Tyres {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//   public checkboxe5: boolean;
//   public checkboxe6: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean,checkboxe3: boolean,checkboxe4: boolean, checkboxe5: boolean, checkboxe6: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//     this.checkboxe5 = checkboxe5;
//     this.checkboxe6 = checkboxe6;
//   }
// }
//
// class Engine {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//   public checkboxe5: boolean;
//   public checkboxe6: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean,checkboxe3: boolean,checkboxe4: boolean, checkboxe5: boolean, checkboxe6: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//     this.checkboxe5 = checkboxe5;
//     this.checkboxe6 = checkboxe6;
//   }
// }
//
// class Suspension {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean,checkboxe3: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//   }
// }
//
// class Interior {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//   public checkboxe5: boolean;
//   public checkboxe6: boolean;
//   public checkboxe7: boolean;
//   public checkboxe8: boolean;
//   public checkboxe9: boolean;
//   public checkboxe10: boolean;
//   public checkboxe11: boolean;
//   public checkboxe12: boolean;
//   public checkboxe13: boolean;
//   public checkboxe14: boolean;
//   public checkboxe15: boolean;
//   public checkboxe16: boolean;
//   public checkboxe17: boolean;
//   public checkboxe18: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean,checkboxe3: boolean,checkboxe4: boolean, checkboxe5: boolean, checkboxe6: boolean,checkboxe7: boolean,checkboxe8: boolean, checkboxe9: boolean, checkboxe10: boolean, checkboxe11: boolean, checkboxe12: boolean,checkboxe13: boolean,checkboxe14: boolean, checkboxe15: boolean, checkboxe16: boolean,checkboxe17: boolean,checkboxe18: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//     this.checkboxe5 = checkboxe5;
//     this.checkboxe6 = checkboxe6;
//     this.checkboxe7 = checkboxe7;
//     this.checkboxe8 = checkboxe8;
//     this.checkboxe9 = checkboxe9;
//     this.checkboxe10 = checkboxe10;
//     this.checkboxe11 = checkboxe11;
//     this.checkboxe12 = checkboxe12;
//     this.checkboxe13 = checkboxe13;
//     this.checkboxe14 = checkboxe14;
//     this.checkboxe15 = checkboxe15;
//     this.checkboxe16 = checkboxe16;
//     this.checkboxe17 = checkboxe17;
//     this.checkboxe18 = checkboxe18;
//   }
// }
//
// class CarBody {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean,checkboxe3: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//   }
// }
//
// class Transmission {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean, checkboxe3: boolean, checkboxe4: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//   }
// }
//
//
// class CarBrakes {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean, checkboxe3: boolean, checkboxe4: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//   }
// }
//
// class CarSteering {
//   public checkboxe1: boolean;
//   public checkboxe2: boolean;
//   public checkboxe3: boolean;
//   public checkboxe4: boolean;
//
//   constructor(checkboxe1: boolean, checkboxe2: boolean, checkboxe3: boolean, checkboxe4: boolean) {
//     this.checkboxe1 = checkboxe1;
//     this.checkboxe2 = checkboxe2;
//     this.checkboxe3 = checkboxe3;
//     this.checkboxe4 = checkboxe4;
//   }
// }
