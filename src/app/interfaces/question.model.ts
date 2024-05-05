export interface Question {
  _id: string;
  question: string;
  answer: Answer[];
}

export interface Answer {
  answer: string;
  count: number;
}
