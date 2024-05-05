
import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FirstQuestion } from 'src/app/interfaces/FirstQuestion.model';

@Component({
  selector: 'app-first-questions',
  templateUrl: './first-questions.component.html',
  styleUrls: ['./first-questions.component.css']
})
export class FirstQuestionsComponent {

  firstQuestions: FirstQuestion[]= [];

  constructor( private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.getFirstQuestions().subscribe((firstQuestion: FirstQuestion[]) => {
      this.firstQuestions = firstQuestion;
      console.log(this.firstQuestions);
    });
  }
}
