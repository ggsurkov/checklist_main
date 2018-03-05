import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagerChecklistPage } from './manager-checklist';

@NgModule({
  declarations: [
    ManagerChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagerChecklistPage),
  ],
})
export class ManagerChecklistPageModule {}
