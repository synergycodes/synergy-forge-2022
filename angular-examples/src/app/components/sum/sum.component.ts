import { CalculationService } from './../../services/calculation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html'
})
export class SumComponent {

  firstNumber = 0;

  secondNumber = 0;

  result = 0;

  constructor(
    private readonly calcService: CalculationService
  ) { }

  sumButtonClick() {
    this.result = this.calcService.sum(this.firstNumber, this.secondNumber);
  }
}
