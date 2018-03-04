import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateChecklistPage } from './create-checklist';

@NgModule({
  declarations: [
    CreateChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateChecklistPage),
  ],
})
export class CreateChecklistPageModule {}
