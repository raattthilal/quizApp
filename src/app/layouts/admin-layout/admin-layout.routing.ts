import { Routes } from '@angular/router';

import { WardComponent } from 'app/masters/ward/ward.component';
import { CreateWardComponent } from 'app/masters/ward/create-ward/create-ward.component';
import { EditWardComponent } from 'app/masters/ward/edit-ward/edit-ward.component';
import { ViewWardComponent } from 'app/masters/ward/view-ward/view-ward.component';
import { QuizComponent } from 'app/masters/quiz/quiz.component';
import { ResultComponent } from 'app/masters/result/result.component';
import { WinnerComponent } from 'app/masters/winner/winner.component';


export const AdminLayoutRoutes: Routes = [
  
    // { path: 'dashboard',      component: DashboardComponent },


    { path: 'questions',  component: WardComponent},
    { path: 'questions/view/:id',  component: ViewWardComponent},
    { path: 'questions/create',  component: CreateWardComponent},
    { path: 'questions/edit/:id',  component: EditWardComponent},
    { path: 'quiz' , component: QuizComponent},
    { path: 'result' , component: ResultComponent},
    { path: 'winner' , component: WinnerComponent},


















  
   
   
    
  
 
   
   

    
   
   
   






 

























    






























   

    
];
