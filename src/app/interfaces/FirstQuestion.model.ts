export interface FirstQuestion {
  _id: number;
  question: string;
  answer: Answer[];
}

export interface Answer {
  answer: string | null;

}
