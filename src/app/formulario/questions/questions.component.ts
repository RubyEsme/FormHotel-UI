import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Question } from 'src/app/interfaces/question.model';
import { SelectedOption, SelectedOptionsUpdate } from 'src/app/interfaces/selected-option.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  selectedOptions: SelectedOption[] = []; // Change to SelectedOption array

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getQuestions().subscribe((questions: Question[]) => {
      this.questions = questions;
    });
  }

  optionSelected(questionId: number, optionId: number): void {
    // Push the selected option as an object with questionId and answerId properties
    this.selectedOptions.push({ idQuestion: questionId, idAnswer: optionId });
  }

  onSubmit(): void {
    const payload: SelectedOptionsUpdate = { answersToUpdate: this.selectedOptions };
    console.log(payload);
    this.dataService.sendSelectedOptions(payload).subscribe(() => {
      console.log('Options sent successfully');
      console.log(payload);
      this.selectedOptions = []; // Reset selectedOptions array with an empty array
    }, (error: any) => {
      console.error('Error sending options:', error);
    });
  }
}
