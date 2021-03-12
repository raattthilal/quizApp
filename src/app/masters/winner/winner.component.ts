import { Component, OnInit } from '@angular/core';
import { WardsService } from 'app/wards.service';
import * as moment from 'moment';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  constructor(private master:WardsService) { }

  Winners=[]
  isdata=false;
  ngOnInit() {
    this.master.get3Winner().subscribe(res=>{
      if(res.success==true){
        console.log("succes");
        this.isdata=true;
        this.Winners=res.data;
        console.log(JSON.stringify(this.Winners));
        
      }else{
        this.isdata=false;
        alert(res.message)
      }
    })
  }
  getDate(val){
    return moment.utc(val).toDate().toUTCString()
  }
 
}
