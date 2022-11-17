import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/first-page',
        pathMatch: 'full'
    },
    {
        path: 'first-page',
        loadChildren: () => import('./modules/first-page/first-page.module').then(m => m.FirstPageModule)
    },
    {
        path: 'second-page',
        loadChildren: () => import('./modules/second-page/second-page.module').then(m => m.SecondPageModule)
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingLazyModule { }