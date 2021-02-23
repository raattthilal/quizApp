import { Component, OnInit } from '@angular/core';
import { WardsService } from 'app/wards.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-ward',
  templateUrl: './create-ward.component.html',
  styleUrls: ['./create-ward.component.scss']
})
export class CreateWardComponent implements OnInit {
  data = {
    quizNo:'',
    question:'',
    sort_order:'',
    options:[
      {
        option:'',
        key:false
    },
    {
      option:'',
      key:false
    },
    {
        option:'',
        key:false
    },
    {
      option:'',
      key:false
    }
    ],
    point:'' ,
    month:''
  }
  // optionsA={
  //   option:'',
  //   key:false
  // }
  // optionsB={
  //   option:'',
  //   key:false
  // }
  // optionsC={
  //   option:'',
  //   key:false
  // }
  // optionsD={
  //   option:'',
  //   key:false
  // }
      constructor(private question:WardsService, private router:Router) { }
    
      ngOnInit() {
       
        
      }
      sub(data){
        console.log("submitting..");
        
        // this.data.options.push(this.optionsA);
        // this.data.options.push(this.optionsB);
        // this.data.options.push(this.optionsC);
        // this.data.options.push(this.optionsD);
        console.log(JSON.stringify(this.data.options));

       this.save()
       
      }
      save(){
        this.question.addQuestion(this.data).subscribe((res)=>{
          if(res.success==1){
            console.log('added succesfully')
            this.router.navigate(['/questions'])
          }
          else{
            this.data.options=[];
            alert(res.message)
          }
        })
      }
    
    }
    