import SuperTemplate from "./super-template";
import {default as TemplateSlide} from "../template-slide";
import {Page} from "ionic-angular/navigation/nav-util";
import {OldCarBuyChecklistPage} from "../../../pages/checklists/old-car-buy-checklist/old-car-buy-checklist";

export default class OldCarBuyTemplate extends SuperTemplate {
  public documents: Documents[];
  public outerInspection: OuterInspection[];
  public tyres: Tyres[];
  public engine: Engine[];
  public suspension: Suspension[];
  public interior: Interior[];
  public carBody: CarBody[];
  public transmission: Transmission[];
  public carBrakes: CarBrakes[];
  public carSteering: CarSteering[];
  public note: String;

  constructor(id, name, slides, pageName, userChecklistName, mainInfo,
              documents, outerInspection, tyres, engine, suspension,
              interior, carBody, transmission, carBrakes, carSteering, note) {

    super(id, name, slides, pageName, userChecklistName, mainInfo );
    this.pageName = pageName;
    this.userChecklistName = userChecklistName;
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
      user.transmission,
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
      ], OldCarBuyChecklistPage, null,
      ['ФИО владельца','Телефон владельца','Место встречи с владельцем', 'Марка авто','Год выпуска','Пробег','Цена'],

      [new Documents('Проверить паспорт продавца и сверить его данные с теми, что указаны в ПТС', false), new Documents('Оригинал ПТС – паспорта транспортного средства (без каких либо отметок) и совпадает с VIN-кодом продаваемого автомобиля', false), new Documents('Найди VIN-код, проверить по нему автомобиль на юридическую частоту http://www.gibdd.ru; а так же хозяина автомобиля http://fssprus.ru', false), new Documents('Наличие паспортных данных автомобиля', false)],

      [new OuterInspection('Ветровое стекло без повреждений и трещин', false), new OuterInspection(' Цвета всех панелей кузова совпадают', false), new OuterInspection('Магнит притягивается ко всем стальным панелям', false), new OuterInspection('Свежая краска (если есть, возможно она скрывает ржавчину)',false), new OuterInspection('Зазоры багажника и капота небольшие и ровные', false), new OuterInspection('Зазор между дверьми и крыльями четко выровнен', false), new OuterInspection('Кузов без царапин', false), new OuterInspection('Кузов без вмятин', false), new OuterInspection('Дворники на месте и нормально функционируют', false), new OuterInspection('Фары и поворотники наповреждены и в полностью рабочем состоянии', false)],

      [new Tyres('Шины известных брендов (Michelin, Bridgestone, Goodyear) - желательно', false), new Tyres('Все шины той же марки', false), new Tyres('Шины не имеют повреждений, порезов, пузырей или трещин', false), new Tyres('Протектор изношен равномерно (неравномерный износ указывает на проблемы с балансировкой или подвеской)', false), new Tyres('Запасное колесо, домкрат и ключ для замены имеются в наличии (в машине) и в полностью рабочем состоянии', false), new Tyres('Запасное колесо накачано', false)],

      [new Engine('Утечек жидкостей, масла или топлива не наблюдается', false), new Engine('Горловина заливки масла не покрыта толстым слоем черных отложений', false), new Engine('На клеммах аккумулятора нет следов коррозии', false), new Engine('На щупе проверки масла нет темных, черных следов масла', false), new Engine('Во время работы двигателя не ощущается посторонних запахов', false), new Engine('Выхлопные газы не синего цвета (что указывает на сжигание масла) или черного цвета (что означает чрезмерный расход топлива)', false)],

      [new Suspension('Автомобиль стоит ровно',false), new Suspension('При надавливании по углам автомобиля, нет скрипящих шумов', false), new Suspension('При надавливании по углам автомобиля, все реагируют одинаково', false)],

      [new Interior('Сиденья неизношены и без трещин', false), new Interior('Все двери спокойно открываются и закрываются',false) , new Interior('Багажник спокойно открывается и закрывается', false), new Interior('Отсутствует острый запах освежителя (он может указывать, что что-то скрывается)', false), new Interior('Все датчики работают', false), new Interior('Ни одна из сигнальных лампочек на панели приборов не горит', false), new Interior('Аудио работает', false), new Interior('Обогреватель работает', false), new Interior('Кондиционер работает', false), new Interior('Дворники работают', false), new Interior('Омывающая жидкость стеклоочистителей нормально подается', false), new Interior('Все сиденья оснащены работающими ремнями безопасности', false), new Interior('Все сиденья нормально регулируются', false), new Interior('Стеклоподъемники нормально работают', false), new Interior('Сигнализация работает (если имеется)', false), new Interior('Ключ нормально запирает и отпирает багажник и дверь со стороны водителя', false), new Interior('Аварийные огни работают нормально', false), new Interior('Фары, включая подфарники и ходовые огни, работают нормально', false)],

      [new CarBody('Шасси не погнуто и не сломано', false), new CarBody('В багажнике нет признаков сминания или исправления металла', false), new CarBody('Отверстия кузова прямо под внешним краем чистые и без царапин', false)],

      [new Transmission('Жидкость в трансмиссии выглядит чистой, без грязи или песка', false), new Transmission('Трансмиссия не проскальзывает и не запаздывает при вождении, передачи переключаются плавно и без скрипа', false)],

      [new CarBrakes('При нажатии на тормоза автомобиль продолжает двигаться прямо, не уводя ни в какую сторону', false), new CarBrakes('Автомобиль свободно ставится и снимается с парковочного (стояночного) тормоза',false), new CarBrakes('При нажатии на педаль тормоза нет скрежета', false), new CarBrakes('Колеса не заклинивает при применении АБС (антиблокировочная система тормозов), (если имеется)', false)],

      [new CarSteering('Автомобиль не тянет ни в одну из сторон без поворачивания руля', false), new CarSteering('Автомобиль едет стабильно; нет тряски или вибрации', false), new CarSteering('На рулевом колесе не ощущается сопротивления при поворотах', false), new CarSteering('При прохождении поворотов нет щелчков или визга', false)],

      null);
  }
}


class Documents {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class OuterInspection {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class Tyres {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class Engine {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class Suspension {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class Interior {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class CarBody {
  public title: String;
  public checkboxe: boolean ;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class Transmission {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}


class CarBrakes {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}

class CarSteering {
  public title: String;
  public checkboxe: boolean;

  constructor(title: String, checkboxe: boolean) {
    this.title = title;
    this.checkboxe = checkboxe;
  }
}
