import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ListPhimComponent } from './list-phim/list-phim.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DanhSachPhimComponent, ChiTietPhimComponent, ListPhimComponent, ItemPhimComponent],
  exports:[DanhSachPhimComponent, ChiTietPhimComponent, ListPhimComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    NgxPageScrollModule,
    NgxPaginationModule
  ]
})
export class DanhSachPhimModule { }
