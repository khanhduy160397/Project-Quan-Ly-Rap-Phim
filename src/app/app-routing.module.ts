import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorGuard } from './_core/guards/author.guard';
import { Page404Component } from './modules/page404/page404.component';
import { AdminAuthorGuard } from './_core/guards/admin-author.guard';

const routes: Routes = [
  {
    path : '' , loadChildren : './modules/home/home.module#HomeModule'
  },
  {
    path : 'admin',loadChildren: './modules/admin/admin.module#AdminModule',
    canActivate : [AdminAuthorGuard]
  },
  {
    path : '**' , component:Page404Component
  }
];

@NgModule({
  // scrollPositionRestoration : khi routing qua component khác sẽ load trên top page
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
