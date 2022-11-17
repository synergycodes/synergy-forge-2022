import { ChildComponent } from './components/child/child.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { FirstComponent } from './components/first/first.component';
import { InlineComponent } from './components/inline/inline.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentComponent } from './components/parent/parent.component';
import { GrayListItemDirective } from './directives/gray-list-item.directive';
import { DateDirective } from './directives/date.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SumComponent } from './components/sum/sum.component';
import { SameInstanceOfServiceComponent } from './components/same-instance-of-service/same-instance-of-service.component';
import { GetStateComponent } from './components/get-state/get-state.component';
import { ChangeStateComponent } from './components/change-state/change-state.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { ListComponent } from './components/list/list.component';
import { AppRoutingLazyModule } from './app-routing-lazy.module';
import { NavbarLazyComponent } from './components/navbar-lazy/navbar-lazy.component';

const components = [
  AppComponent,
  FirstComponent,
  NavbarComponent,
  InlineComponent,
  DataBindingsComponent,
  ParentComponent,
  ChildComponent,
  PageNotFoundComponent,
  SumComponent,
  SameInstanceOfServiceComponent,
  GetStateComponent,
  ChangeStateComponent,
  MoviesComponent,
  MovieDetailComponent,
  TemplateDrivenFormComponent,
  ReactiveFormComponent,
  RxjsComponent,
  ListComponent,
  NavbarLazyComponent
];

const directives = [
  GrayListItemDirective,
  DateDirective
];

@NgModule({
  declarations: [
    components,
    directives
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    // AppRoutingLazyModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
