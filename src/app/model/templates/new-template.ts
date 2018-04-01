import TemplateSlide from "../template-slide";
import SuperTemplate from "./super-template";
import {OldCarBuyChecklistPage} from "../../../pages/checklists/old-car-buy-checklist/old-car-buy-checklist";

export default class NewTemplate extends SuperTemplate {
  mainInfo: MainInfo;
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
  note: String;


  constructor(id, name, slides, pageName, userChecklistName, mainInfo, documents,outerInspection,tyres,engine,suspension,interior,carBody,transmission,carBrakes,carSteering, note) {

    super(id, name, slides, pageName, userChecklistName );
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
    return new NewTemplate(null, 'New Template', [new TemplateSlide('UserChecklistNameUserChecklistName', ['UserChecklistNameUserChecklistName UserChecklistName','UserChecklistName UserChecklistName UserChecklistName']), new TemplateSlide('UserChecklistNameUserChecklistName', ['UserChecklistNameUserChecklistName UserChecklistName','UserChecklistName UserChecklistName UserChecklistName'])], 'OldCarBuyChecklistPage', 'UserChecklistName', new MainInfo('FIO', 'INFO','FIO', 'INFO','FIO', 'INFO','FIO'),[false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false,false, true, false],[false, true],[false, true],[false, true],[false, true],[false, true],[false, true],[false, true],[false, true],[false, true], 'Note Strings Note Strings Note Strings Note StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote StringsNote Strings')
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
