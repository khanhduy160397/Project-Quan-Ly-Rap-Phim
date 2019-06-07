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

@Injectable({
  providedIn: 'root'
})
export default class NguoiDungService {

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
  handleError(err){
    return err;
  }


}
