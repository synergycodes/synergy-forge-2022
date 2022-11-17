import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PowerCalculatorModule } from '../modules/power-calculator/power-calculator.module';
import { TasksModule } from '../modules/tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, PowerCalculatorModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
