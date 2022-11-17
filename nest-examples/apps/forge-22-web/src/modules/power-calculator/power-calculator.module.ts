import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PowerCalculatorComponent } from './power-calculator.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PowerCalculatorService } from './power-calculator.service';

const components = [
  PowerCalculatorComponent
]

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PowerCalculatorService
  ],
  declarations: components,
  exports: components
})
export class PowerCalculatorModule { }
