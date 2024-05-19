export interface ClientQuestions {
  _id: number;
  question: string;
  answer: Answer[];
}

export interface Answer {
  id: number;
  answer: string;
  count: number;

}
