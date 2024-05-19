import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './interfaces/question.model';
import { FirstQuestion } from './interfaces/FirstQuestion.model';
import { ClientQuestions } from './interfaces/clientQuestions.model';
import { SelectedOptionsUpdate, SelectedOption} from './interfaces/selected-option.model';
import { AnswersToSend } from './interfaces/answersToSend.model';

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

  sendSelectedOptions(selectedOptions: SelectedOptionsUpdate): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/questions/update-answer-count`, selectedOptions);
  }

  sendFirstQuestions(sendFirstQuestions: AnswersToSend): Observable<AnswersToSend> {
    return this.http.put<any>(`${this.apiUrl}/firstQuestions/send-answer`, sendFirstQuestions);
  }

  getClientQuestions(): Observable<ClientQuestions[]>{
    return this.http.get<ClientQuestions[]>(`${this.apiUrl}/clientQuestions`);
  }

  sendClientQuestions(sendClientQuestions: SelectedOptionsUpdate): Observable<AnswersToSend> {
    return this.http.put<any>(`${this.apiUrl}/clientQuestions/update-answer-count`, sendClientQuestions);
  }

}
