import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html'
})
export class DataBindingsComponent {

  inputValue = 'displayed input value';

  twoWayBinding = '';

  alertText = 'alert test';

  click() {
    alert(`Message: ${this.alertText}`);
  }

}
