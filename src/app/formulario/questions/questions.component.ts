import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Question } from 'src/app/interfaces/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getQuestions().subscribe((questions: Question[]) => {
      this.questions = questions;
    });
  }
}
