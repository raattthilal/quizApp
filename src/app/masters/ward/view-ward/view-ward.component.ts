import { Component, OnInit } from '@angular/core';
import { WardsService } from 'app/wards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-ward',
  templateUrl: './view-ward.component.html',
  styleUrls: ['./view-ward.component.scss']
})
export class ViewWardComponent implements OnInit {
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
  id:string;


  constructor(private ward:WardsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.ward.getEachQuestion(this.id).subscribe((res)=>{

      this.data = res.ward;
      console.log(this.data);
  }
    )
}
editgo(id){
  this.router.navigate([`questions/edit/${id}`])
}
deletego(id){
  this.ward.deleteQuestion(this.id).subscribe()
  this.router.navigate(['questions'])
}

}