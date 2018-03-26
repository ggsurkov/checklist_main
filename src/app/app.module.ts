import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CreateChecklistPageModule} from "../pages/create-checklist/create-checklist.module";
import {ShoppingChecklistPageModule} from "../pages/checklists/shopping-checklist/shopping-checklist.module";
import {OldCarBuyChecklistPageModule} from "../pages/checklists/old-car-buy-checklist/old-car-buy-checklist.module";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    PipesModule,
    CreateChecklistPageModule,
    ShoppingChecklistPageModule,
    OldCarBuyChecklistPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
