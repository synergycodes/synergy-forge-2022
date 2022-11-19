import { Component } from '@angular/core';
import { IPerson } from '@first-nx-app/domain';

@Component({
  selector: 'first-nx-app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {

  person: IPerson = {
    name: 'Jan',
    surname: 'Nowak',
    age: 31
  };

  people: IPerson[] = [
    {
      name: 'Jan',
      surname: 'Nowak',
      age: 31
    },
    {
      name: 'Janina',
      surname: 'Kowalska',
      age: 40
    },
    {
      name: 'Eugeniusz',
      surname: 'Nawrocki',
      age: 50
    }
  ];

}
