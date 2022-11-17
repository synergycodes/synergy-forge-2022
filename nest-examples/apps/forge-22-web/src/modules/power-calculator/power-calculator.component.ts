import { Component } from '@angular/core';
import { PowerCalculatorService } from './power-calculator.service';

@Component({
  selector: 'my-fullstack-app-power-calculator',
  templateUrl: './power-calculator.component.html'
})
export class PowerCalculatorComponent {
  result?: number;

  value = 7;
  power = 2;

  constructor(
    private powerCalculatorService: PowerCalculatorService
  ) { }

  getResult() {
    this.powerCalculatorService.getPower(this.value, this.power)
      .subscribe((result) => this.result = result);
  }
}
