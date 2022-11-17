import { Component, EventEmitter, Input, Output } from '@angular/core';
import Hobby from 'src/app/models/hobby';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  @Input() hobbies: Hobby[] = [];

  @Output() hobbyEmitter = new EventEmitter<string>();

  textToClean = 'text will clear';

  constructor() { }

  selectHobby(hobby: string) {
    this.hobbyEmitter.emit(hobby);
  }
}
