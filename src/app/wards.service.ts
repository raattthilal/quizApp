import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WardsService {

  constructor(private http:HttpClient) { }


  getAllQuestions(page,limit){
    return this.http.get<any>(`5000/question/list?page=${page}&limit=${limit}`)
  }
  getEachQuestion(id){
    return this.http.get<any>(`5000/question/get?id=${id}`)
  }
  addQuestion(body){
    return this.http.post<any>('5000/question/create',body)
  }
  editWard(id,data){
    return this.http.put<any>(`5000/question/update?id=${id}`,data)
  }
  deleteQuestion(id){
    return this.http.delete<any>(`5000/question/delete?id=${id}`)
  }
  getQuizQuestion(page){
    return this.http.get<any>(`5001/quiz/questions?page=${page}`)
  }
  answerQuiz(data){
    return this.http.post<any>('5001/quiz/answer',data)
  }
  getAllResults(page,limit){
    return this.http.get<any>(`5001/quiz/results?page=${page}&limit=${limit}`)
  }
  get3Winner(){
    return this.http.get<any>('5001/quiz/winner');
  }

}
