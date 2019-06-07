import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { CanDeactivedGuard } from 'src/app/_core/guards/can-deactived.guard';
import { LoginGuardGuard } from 'src/app/_core/guards/login-guard.guard';
// import { CanDeactiveGuard } from 'src/app/_core/guards/can-deactive.guard';

const routes: Routes = [
  {
    path : '' , component : FormComponent,children : [
      {
        path:'dang-ky',component:DangKyComponent,
        canDeactivate : [CanDeactivedGuard]

      },
      {
        path:'dang-nhap',component:DangNhapComponent,
        canDeactivate : [LoginGuardGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
