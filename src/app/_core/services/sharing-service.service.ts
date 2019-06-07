import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingServiceService {

  private listMovie = new BehaviorSubject([] as any);
  // ShareListMovie sẽ đảm nhiệm lấy dữ liệu
  shareListMovie = this.listMovie.asObservable();

  // Lưu trữ chi tiết 1 bộ phim 

  private detailPhim = new BehaviorSubject({} as any);
  shareDetailPhim = this.detailPhim.asObservable();

  private modalMovie = new BehaviorSubject([] as any);
  // ShareListMovie sẽ đảm nhiệm lấy dữ liệu
  shareModal = this.modalMovie.asObservable();

  constructor() {
    
  }
    // Lưu dữ liệu lên store
    sharingDataModalMovie (movie:any){
      this.modalMovie.next(movie);
    }
  
  // Lưu dữ liệu lên store
  sharingDataListMovie (movie:any){
    this.listMovie.next(movie);
  }
  // Lưu trữ lên store của detailPhim
  sharingDataDetailPhim(movie:any){
    this.detailPhim.next(movie);
  }
}
