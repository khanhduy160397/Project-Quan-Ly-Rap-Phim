import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';

const routes: Routes = [
  {
    path : '' , component : FormComponent,children : [
      {
        path:'dang-ky',component:DangKyComponent
      },
      {
        path:'dang-nhap',component:DangNhapComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
