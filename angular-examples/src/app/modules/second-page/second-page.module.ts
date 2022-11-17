import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page.component';
import { SecondPageRoutingModule } from './second-page-routing.module';

@NgModule({
  declarations: [
    SecondPageComponent
  ],
  imports: [
    CommonModule,
    SecondPageRoutingModule
  ]
})
export class SecondPageModule { }
