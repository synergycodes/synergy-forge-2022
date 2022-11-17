import { Component } from '@angular/core';
import { CommonPropertyService } from './../../services/common-property.service';

@Component({
  selector: 'app-get-state',
  templateUrl: './get-state.component.html'
})
export class GetStateComponent {

  state = 0;

  constructor(
    private service: CommonPropertyService
  ) { }

  getStateInfo() {
    this.state = this.service.getStateInfo();
  }

}
