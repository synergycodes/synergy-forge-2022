import { SharedListModule } from '@first-nx-app/shared-components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, SharedListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
