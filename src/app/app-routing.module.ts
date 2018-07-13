import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {FarmsComponent} from './farmers-market/farms/farms.component'
import {FarmDetailsComponent} from './farmers-market/farm-details/farm-details.component'
 
const My_ROUTES : Routes =  [
  {  path: 'home',component:FarmsComponent },
  {  path:'farm/:id',component:FarmDetailsComponent }
  ];
  

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(My_ROUTES)
  ],
  declarations: [FarmsComponent]
})
export class AppRoutingModule { }
