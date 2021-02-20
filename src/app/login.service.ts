import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authurl ="/admin/login";
 
  constructor(private http: HttpClient, private router: Router) {}

    loginauth(data) {
      return this.http.post<any>(this.authurl , data)
    }
    checktoken(){
      const token = localStorage.getItem('token');
     
      if(!token)
       this.router.navigate(['/login']);
    }
    logout(){
      localStorage.clear();

      this.router.navigate(['/login']);
    }

}
