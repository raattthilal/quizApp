import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource, MatSort,MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { WardsService } from 'app/wards.service';


@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrls: ['./ward.component.scss']
})
export class WardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  SettingData :any;
  perPage=5
  page=0

  displayedColumns: string[] = ['ward_no','name_en','name_ml','lsgi1','actions'];
  searchKey: string;
  
// lsgis:[]
permissions={};
  constructor(private question:WardsService, private router:Router) { }
  // lsgi_id;
// dist(x){
//   this.lsgi_id=x;
//   // this.lsgi.getLsgis().subscribe((res)=>{this.lsgis=res.items
//   //   console.log(this.lsgis)});
//     this.ngOnInit();
// }
applyFilter() {
  this.ngOnInit()
}
  ngOnInit() {
    // this.per.getpermission(this.permission).subscribe((res)=>{
    //   console.log(res);
    //   console.log(this.permission);
    //   if(res.is_permission==false){
    //     this.router.navigate(['404errorpage']);
    //   }
    //   else{
        this.question.getAllQuestions(this.page,this.perPage,).subscribe(res=>{
          this.SettingData = new MatTableDataSource(res.items)
          console.log(res.items);
          
    //       this.totalPages= res.total_pages;
    //       this.GetpageCount()
        })
    //   }
      
      
    // })
   
  
    
 
  // this.lsgi.getLsgis().subscribe((res)=>{this.lsgis=res.items
  //   console.log(this.lsgis)});
  }
  
// Pre(){this.page-=1;this.ngOnInit()}
// next(){this.page+=1;this.ngOnInit()}


// ItemsPerPage(perPage){
  
//   this.ngOnInit() 

// }
// PageNo(page){

//    this.page=page;
//   this.ngOnInit()
// }


editward(id){
  this.router.navigate([`questions/edit/${id}`])
}

onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}


// editSetting(id){
//   console.log(id);
//   this.router.navigate([`/editsettings/${id}`])
// }
view_ward(id){
  this.router.navigate([`questions/view/${id}`])
}

Delete(id){
  this.question.deleteQuestion(id).subscribe(()=>{
    console.log('succesfully Deleted');
    this.ngOnInit()
    
  })
}
  

}