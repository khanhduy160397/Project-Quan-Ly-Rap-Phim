import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {tap,catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
let urlAPI = '';
const httpOptions = {
  headers : new HttpHeaders({
    "Content-Type" : "application/json"
  })
}
const httpOptionss = {
  headers : new HttpHeaders({
    "Content-Type" : "application/json;charset=UT8-8"
  })
}

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http : HttpClient) { 
    urlAPI = environment.urlAPI;
  }

  get(uri:string) : Observable<any> {
    return this.http.get(urlAPI+"/"+uri).pipe(
      tap(
        // Thành công
        () => {},
        // Thất bại
        catchError(err =>{
          return this.handleError(err);
        })
      )
    )
  }

  post(uri:string,data?:object) : Observable<any>
  {
    return this.http.post(urlAPI+"/"+uri,data,httpOptions).pipe(
      tap(
        ()=>{},
        catchError(err=>{
          return this.handleError(err);
        })
      )
    )
  }
  delete(url) : Observable<any> {
    return this.http.delete(urlAPI+"/"+url).pipe(
      tap(
        ()=>{},
        catchError(err =>{
          return this.handleError(err)
        })
      )
    )
  }
  UploadPhim(data) : Observable<any>{
    let ob = this.http.post(`http://svcy2.myclass.vn/api/quanlyphim/UploadFile`,data);
    return ob;
  }
  handleError(err){
    return err;
  }


}
