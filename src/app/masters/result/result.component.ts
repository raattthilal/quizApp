import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { WardsService } from 'app/wards.service';
import moment = require('moment');

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  SettingData: MatTableDataSource<any>;
  perPage=10
  page=0
 

  displayedColumns: string[] = ['month','quizNo','houseNo','point','created_at'];
  searchKey: string;
  

  constructor(private question:WardsService, private router:Router) { }
  
applyFilter() {
this.SettingData.filter = this.searchKey.trim().toLowerCase()
}
length;
filt(){
  this.getdata()
}
onPaginate(pageEvent: PageEvent) {
  this.perPage = pageEvent.pageSize;
  this.page = pageEvent.pageIndex;
  this.getdata()
}
  ngOnInit() {
       this.getdata()  
  }
  
  getDate(val){
    return moment.utc(val).toDate().toUTCString()
  }
getdata(){

  this.question.getAllResults(this.page,this.perPage).subscribe(res=>{
    this.SettingData = new MatTableDataSource(res.data.data)
    this.length=res.data.count;
  })
  
}


onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}





}
