import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterRestaurantPage } from './filter-restaurant';

@NgModule({
  declarations: [
    FilterRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterRestaurantPage),
  ],
})
export class FilterRestaurantPageModule {}
