import { Component, OnInit } from '@angular/core';
import { ForgetPassService } from 'app/forget-pass.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private frget:ForgetPassService,private route:ActivatedRoute,private router:Router) { }
  data={
    phone:''
  }
  data2={
    token:'',
    otp:''
  }
  dataa2={
    
    password:''
  }
  pa;
  id:string;
  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id')
    $('#rr').hide()
    $('#z').hide()
    $('#rr3').hide()
    $('#rr1').hide()
    $('#z2').hide()


  }
  onsubmit(){
    this.clicks()
  }
  clicks(){
    this.frget.postmobile(this.data).subscribe((res)=>{
      if(res.success==1){
        console.log(res)
         this.data2.token=res.token
        console.log(res.token)
        console.log(this.data2.token);
        
        $('#rr').show();
        $('#z').show()
      

      }
    })
  }
  clicks2(){
    this.frget.sendOtp(this.data2).subscribe((res)=>{
      console.log(this.data2);
      
      if(res.success==1){
        localStorage.setItem('token',res.token)
        $('#rr3').show()
        $('#rr1').show()
        $('#z2').show()

      }
    })
  }
  click3(){
    this.frget.sendpassword(this.dataa2).subscribe((res)=>{
      if(res.success==1){
        this.router.navigate(['dashboard'])

      }
    })

  }


}
