import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/share_modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ThemPhimComponent } from './them-phim/them-phim.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemPhimComponent } from './danh-sach-phim/item-phim/item-phim.component';
import { SuaPhimComponent } from './danh-sach-phim/sua-phim/sua-phim.component';
import { ListPhimComponent } from './danh-sach-phim/list-phim/list-phim.component';
import { CapNhatPhimComponent } from './danh-sach-phim/cap-nhat-phim/cap-nhat-phim.component';
import { DanhSachNguoiDungComponent } from './danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import { CapNhatNguoiDungComponent } from './danh-sach-nguoi-dung/cap-nhat-nguoi-dung/cap-nhat-nguoi-dung.component';
import { NguoiDungComponent } from './danh-sach-nguoi-dung/nguoi-dung/nguoi-dung.component';
import { ListNguoiDungComponent } from './danh-sach-nguoi-dung/list-nguoi-dung/list-nguoi-dung.component';

@NgModule({
  declarations: [AdminComponent, ThemPhimComponent, DanhSachPhimComponent, ItemPhimComponent, SuaPhimComponent, ListPhimComponent, CapNhatPhimComponent, DanhSachNguoiDungComponent, CapNhatNguoiDungComponent, NguoiDungComponent, ListNguoiDungComponent],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
