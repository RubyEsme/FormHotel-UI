export interface Question {
  _id: string;
  question: string;
  answer: Answer[];
}

export interface Answer {
  id: string;
  answer: string;
  count: number;

}
