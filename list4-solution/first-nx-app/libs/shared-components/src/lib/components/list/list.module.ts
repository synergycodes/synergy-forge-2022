import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedListComponent } from './shared-list.component';

@NgModule({
  declarations: [SharedListComponent],
  exports: [SharedListComponent],
  imports: [CommonModule],
})
export class SharedListModule { }
