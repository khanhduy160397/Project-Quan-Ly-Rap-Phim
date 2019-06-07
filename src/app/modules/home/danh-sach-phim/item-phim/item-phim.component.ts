import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() movie;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  ChiTietPhim(){
    this.router.navigate(
      ["/danh-sach-phim/phim",this.movie.MaPhim], {queryParams: {phim : this.movie.TenPhim}}
    )
  }
}
