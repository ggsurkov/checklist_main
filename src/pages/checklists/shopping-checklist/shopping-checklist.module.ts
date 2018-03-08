import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingChecklistPage } from './shopping-checklist';

@NgModule({
  declarations: [
    ShoppingChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingChecklistPage),
  ],
})
export class ShoppingChecklistPageModule {}
