import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccService {
url='/admin/profile';
urlpass='/admin/profilepassword';
  constructor(private http:HttpClient) { }


getdata(){
  return this.http.get<any>(this.url);
}
editdata(data){
  return this.http.patch<any>(this.url, data);
}
editpass(data){
  return this.http.patch<any>(this.urlpass, data);
}
}
