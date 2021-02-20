import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WardsService {

  constructor(private http:HttpClient) { }


  getAllQuestions(page,limit){
    return this.http.get<any>(`/question/list?page=${page}&limit=${limit}`)
  }
  getEachQuestion(id){
    return this.http.get<any>(`/question/${id}`)
  }
  addQuestion(body){
    return this.http.post<any>('/question/create',body)
  }
  editWard(id,data){
    return this.http.put<any>(`/question/${id}`,data)
  }
  deleteQuestion(id){
    return this.http.delete(`/question/${id}`)
  }

}
