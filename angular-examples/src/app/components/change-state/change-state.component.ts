import { Component } from '@angular/core';
import { CommonPropertyService } from 'src/app/services/common-property.service';

@Component({
  selector: 'app-change-state',
  templateUrl: './change-state.component.html'
})
export class ChangeStateComponent {

  state = 0;

  constructor(
    private service: CommonPropertyService
  ) { }

  btnClick() {
    this.service.changeState();
    this.state = this.service.getStateInfo();
  }
}
