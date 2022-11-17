import { RxjsComponent } from './components/rxjs/rxjs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { FirstComponent } from './components/first/first.component';
import { InlineComponent } from './components/inline/inline.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SameInstanceOfServiceComponent } from './components/same-instance-of-service/same-instance-of-service.component';
import { SumComponent } from './components/sum/sum.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'data-bindings',
    component: DataBindingsComponent
  },
  {
    path: 'inline',
    component: InlineComponent
  },
  {
    path: 'components-communication',
    component: ParentComponent
  },
  {
    path: 'sum',
    component: SumComponent
  },
  {
    path: 'same-instance-of-service',
    component: SameInstanceOfServiceComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'routing',
    component: MoviesComponent,
    children: [
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
