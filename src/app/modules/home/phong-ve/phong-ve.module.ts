import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhongVeComponent } from './phong-ve.component';
import { PhongVeRoutingModule } from './phong-ve-routing.module';
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [PhongVeComponent, ItemGheComponent],
  imports: [
    CommonModule,
    PhongVeRoutingModule
  ]
})
export class PhongVeModule { }
