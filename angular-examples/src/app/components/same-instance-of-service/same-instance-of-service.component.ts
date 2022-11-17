import { CommonPropertyService } from './../../services/common-property.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-same-instance-of-service',
  templateUrl: './same-instance-of-service.component.html',
  providers: [
    CommonPropertyService
  ]
})
export class SameInstanceOfServiceComponent { }
