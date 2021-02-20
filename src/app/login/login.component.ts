import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/login.service';
import { tokenName } from '@angular/compiler';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data={
    username:"",
    password:""
       };
// district_id="14"
// lsgi_id="18"
// lsgi_block_id="11"
// ward_id=""
// session(){
// localStorage.setItem('district_id',this.district_id)
// }
  constructor(private loginServ: LoginService, private router: Router) { }

  onsubmit(){
    this.login()
  }
login() {

  this.loginServ.loginauth(this.data).subscribe(
    (res) => {
   
      
      if (res.success == 1) {
        
        localStorage.setItem( 'permissions', JSON.stringify(res.userDetails.permissions)); 
        localStorage.setItem('token', res.token);
        if(res.userDetails.district_id){
         localStorage.setItem('district_id',res.userDetails.district_id);
        }
        if(res.userDetails.lsgi_id){
        localStorage.setItem('lsgi_id',res.userDetails.lsgi_id);
        }
        if(res.userDetails.lsgi_block_id){
        localStorage.setItem('lsgi_block_id',res.userDetails.lsgi_block_id);
        }
        // localStorage.setItem('ward_id',res.userDetails.ward_id);


       
        this.router.navigate(['/dashboard']);
      }
      if(res.success == 0){
        $('#msg').html('Invalid User Credentials..!!!')
      }
          });
};
  ngOnInit() {
  
const token = localStorage.getItem('token');
if(token){
  
  this.router.navigate(['/dashboard']);
}
this.loginServ.checktoken();
   }
  

}
