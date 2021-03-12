import { Component, OnInit } from '@angular/core';
import { WardsService } from 'app/wards.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor( private master:WardsService) { }
  houseNo;
  page = 0;
  started=false;
  finishButton=false;

  Question={
    id:'',
    question:'',
    options:[],
    sort_order:''
  }
  Answer={
    houseNo:'',
    questionId:'',
    answer:'',
    isFinal:false
  }

  ngOnInit() {
  let Hno = localStorage.getItem('houseNo');
  
  if(Hno){
    console.log(this.page);
    this.started=true
    this.Answer.houseNo=Hno?Hno:'';
    this.getQuestion('ngonit');
  }    
 }

  getQuestion(val){
    console.log(`calling quest. from ${val} ,with pageno ${this.page}` );
    this.master.getQuizQuestion(this.page).subscribe(res=>{
      if(res.success==true){
        console.log("successed .");
        this.Question = res.data;
        this.Answer.questionId= res.data.id;
        this.Answer.isFinal= res.isFinal;
        if(this.Answer.isFinal==true){
          console.log("final quest");
          this.finishButton=true;
        }else{
          this.finishButton=false;
        }
      }
      if(res.message=="No Question founded..!"){
        alert(res.message)
        localStorage.clear();
        this.started=false;
        this.ngOnInit();
      }
    })
  }

  startquiz(){
   localStorage.setItem('houseNo',this.houseNo); 
   this.started=true;
   this.ngOnInit()
  }
  nextQ(){
  if(this.Answer.answer!=''){
    this.master.answerQuiz(this.Answer).subscribe(res=>{
      if(res.success==true){
        this.page++;
        console.log(this.page);
        
        this.Answer.questionId='';
        this.Answer.answer='';
        this.getQuestion('next-success');
      }else{
        if(res.message=="You already answered this Question !"){
          alert(res.message);
          this.page++;
          console.log(this.page);
          this.getQuestion('next-false');
        }
      }
    }) 
  }else{
    alert("Please select an answer");
  }
   
  }

  setVal(val){
    this.Answer.answer=val;
  }
  
  finish(){
    if(this.Answer.answer!=''){
    this.master.answerQuiz(this.Answer).subscribe(res=>{
      if(res.success==true && res.finished==true){
        alert("Thank you . Successfully Completed.")
        localStorage.clear(); 
        this.finishButton=false;
        this.started=false;
        this.page=0;
        this.Answer.questionId='';
        this.Answer.answer='';
      }else{
        if(res.message=="You already answered this Question !"){
          alert(res.message);
          localStorage.clear(); 
          this.finishButton=false;
          this.started=false;
          this.page=0;
        }
      }
    })
    
  }
}
}
