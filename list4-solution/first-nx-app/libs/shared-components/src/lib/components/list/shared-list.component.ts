import { IPerson } from '@first-nx-app/domain';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.scss'],
})
export class SharedListComponent {

  @Input()
  itemsList: IPerson[] = [];

}
