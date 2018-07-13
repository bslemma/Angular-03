import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms/farms.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import {DbService} from './db.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FarmsComponent, FarmDetailsComponent]
})

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[FarmsComponent],
  providers:[DbService],
  declarations: [FarmsComponent, FarmDetailsComponent]
})
export class FarmersMarketModule { }
