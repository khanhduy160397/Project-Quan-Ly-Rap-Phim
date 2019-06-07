import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '' , loadChildren : './modules/home/home.module#HomeModule'
  },
  {
    path : 'admin',loadChildren: './modules/admin/admin.module#AdminModule'
  }
];

@NgModule({
  // scrollPositionRestoration : khi routing qua component khác sẽ load trên top page
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
