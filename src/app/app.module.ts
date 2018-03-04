import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SearchPipe} from "../pipes/search/search";
import {CreateChecklistPage} from "../pages/create-checklist/create-checklist";
import {CreateChecklistPageModule} from "../pages/create-checklist/create-checklist.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    CreateChecklistPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateChecklistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
