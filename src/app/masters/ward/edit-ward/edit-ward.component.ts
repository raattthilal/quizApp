import { Component, OnInit } from '@angular/core';
import { WardsService } from 'app/wards.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-ward',
  templateUrl: './edit-ward.component.html',
  styleUrls: ['./edit-ward.component.scss']
})
export class EditWardComponent implements OnInit {
  data = {
    quizNo:'',
    question:'',
    options:[
    ],
    point:'' ,
    month:''
  }
  optionsA={
    option:'',
    key:false
  }
  optionsB={
    option:'',
    key:false
  }
  optionsC={
    option:'',
    key:false
  }
  optionsD={
    option:'',
    key:false
  }
id:string
  constructor(private ward:WardsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.lsgi.getlsgi2().subscribe((res)=>{
    //   this.wards= res.items;
    // //   console.log(this.lsgi_types)
    // // console.log(this.lsgi_types);
    // });
this.ward.getEachQuestion(this.id).subscribe((res)=>{
  this.data = res.ward;
});
  }
  
  Update(){
    this.save()
  }
  save(){
    this.ward.editWard(this.id,this.data).subscribe((res)=>{
      if(res.success==1){
      console.log('successfully updated');
      this.router.navigate(['/questions'])
      }
      else{
        alert(res.message)
      }
    })
  }

}
