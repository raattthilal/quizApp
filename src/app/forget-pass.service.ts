import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetPassService {

  constructor(private http:HttpClient) { }

  postmobile(data){
    return this.http.post<any>('/admin/usersotp/send-otp',data)

  }
  sendOtp(dataa){
    return this.http.post<any>('/admin/usersotp/validate-otp',dataa);
  }
  sendpassword(dataa){
    return this.http.patch<any>('/admin/usersotp/reset-password',dataa);
  }
}
