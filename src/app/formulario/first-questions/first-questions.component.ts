
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FirstQuestion } from 'src/app/interfaces/FirstQuestion.model';
import { AnswersToSend, firstAnswers } from 'src/app/interfaces/answersToSend.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-questions',
  templateUrl: './first-questions.component.html',
  styleUrls: ['./first-questions.component.css']
})
export class FirstQuestionsComponent {


  firstAnswerstoSend: firstAnswers[] = [];
  firstQuestions: FirstQuestion[] = [];
  questionAnswers: { [questionId: number]: string } = {};
 // Initialize questionAnswers

  constructor( private dataService: DataService, private router: Router){

  }

  ngOnInit(): void {
    this.dataService.getFirstQuestions().subscribe((firstQuestion: FirstQuestion[]) => {
      this.firstQuestions = firstQuestion;
      console.log(this.firstQuestions);
    });
  }

  onSubmit(): void {
    // Initialize the array to store answers
    this.firstAnswerstoSend = [];

    // Iterate over questionAnswers object
    Object.keys(this.questionAnswers).forEach((key: string) => {
      const questionId = parseInt(key, 10);
      const answer = this.questionAnswers[questionId];

      // Check if answer is not empty (null, undefined, or '')
      if (answer && answer.trim() !== '') {
        // Push only non-empty answers into firstAnswerstoSend array
        this.firstAnswerstoSend.push({ questionId: questionId, answer: answer });
      }
    });
    // Check if there are any answers to send
    if (this.firstAnswerstoSend.length > 0) {
      // Prepare payload and send to the backend
      const payload: AnswersToSend = { answersToSend: this.firstAnswerstoSend };
      console.log('Payload to send:', payload);
      this.dataService.sendFirstQuestions(payload).subscribe(() => {
        console.log('Answers sent successfully');
        console.log('Payload sent:', payload);
        this.firstAnswerstoSend = []; // Reset array after successful submission
         // Navigate to the desired route programmatically
        this.router.navigate(['/Form']); // Replace 'target-route' with your desired route
      }, (error: any) => {
        console.error('Error sending answers:', error);
      });
    } else {
      // No answers to send
      console.log('No answers to send.');
    }
  }


}
