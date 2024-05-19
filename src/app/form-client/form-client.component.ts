import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ClientQuestions } from '../interfaces/clientQuestions.model';
import { SelectedOptionsUpdate, SelectedOption } from '../interfaces/selected-option.model';
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent {
  questions: ClientQuestions[] = [];
  selectedOptions: SelectedOption[] = [];

  constructor(private dataService: DataService){

  }
  ngOnInit(): void {
    this.dataService.getClientQuestions().subscribe((questions: ClientQuestions[]) => {
      this.questions = questions;
    });
  }

  optionSelected(questionId: number, optionId: number): void {
    // Push the selected option as an object with questionId and answerId properties
    this.selectedOptions.push({ idQuestion: questionId, idAnswer: optionId });
    console.log(this.selectedOptions);
  }

  onSubmit(): void {
    const payload: SelectedOptionsUpdate = { answersToUpdate: this.selectedOptions };
    console.log(payload);
    this.dataService.sendClientQuestions(payload).subscribe(() => {
      console.log('Options sent successfully');
      console.log(payload);
      this.selectedOptions = []; // Reset selectedOptions array with an empty array
    }, (error: any) => {
      console.error('Error sending options:', error);
    });
  }


}
