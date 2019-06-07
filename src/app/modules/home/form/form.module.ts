import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { FormRoutingModule } from './form-routing.module';
import {FormsModule} from '@angular/forms'
import Swal from 'sweetalert2'

@NgModule({
  declarations: [FormComponent, DangKyComponent, DangNhapComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
    
  ]
})
export class FormModule { }
