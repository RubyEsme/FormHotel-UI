import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './interfaces/question.model';
import { FirstQuestion } from './interfaces/FirstQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Replace this with your API URL

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions`);
  }

  getFirstQuestions(): Observable<FirstQuestion[]> {
    return this.http.get<FirstQuestion[]>(`${this.apiUrl}/firstQuestions`);
  }

  // updateChoiceCount(questionId: string, choiceIndex: number): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/questions/${questionId}/choices/${choiceIndex}/increment`, {});
  // }
}
