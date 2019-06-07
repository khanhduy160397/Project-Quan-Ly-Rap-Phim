import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ListPhimComponent } from './list-phim/list-phim.component';

const routes: Routes = [
  {
    path : '' , component : DanhSachPhimComponent,children : [
      {
        path:'phim/:id',component:ChiTietPhimComponent
      },
      {
        path:'',component:ListPhimComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachPhimRoutingModule { }
