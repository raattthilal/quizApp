import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource, MatSort,MatPaginator, PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { WardsService } from 'app/wards.service';


@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrls: ['./ward.component.scss']
})
export class WardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  SettingData: MatTableDataSource<any>;
  perPage=10
  page=0

  displayedColumns: string[] = ['quizNo','month','sort_order','question','point','created_at','actions'];
  searchKey: string;
  

  constructor(private question:WardsService, private router:Router) { }
  
applyFilter() {
  this.SettingData.filter = this.searchKey.trim().toLowerCase()

}
length;

onPaginate(pageEvent: PageEvent) {
  this.perPage = pageEvent.pageSize;
  this.page = pageEvent.pageIndex;
  this.getdata()
}
  ngOnInit() {
       this.getdata()  
  }
  
getdata(){

  this.question.getAllQuestions(this.page,this.perPage,).subscribe(res=>{
    this.SettingData = new MatTableDataSource(res.data.data)
    this.length=res.data.count;
  })
  
}

editward(id){
  this.router.navigate([`questions/edit/${id}`])
}

onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}

view_ward(id){
  this.router.navigate([`questions/view/${id}`])
}

Delete(id){
  confirm("Are you sure to delete ?") ?
  this.question.deleteQuestion(id).subscribe(()=>{
    console.log('succesfully Deleted');
    this.ngOnInit()
  }):null
}
  

}