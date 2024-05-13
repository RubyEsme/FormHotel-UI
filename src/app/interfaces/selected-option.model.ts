// selected-options-update.model.ts

// Define the SelectedOption interface
export interface SelectedOption {
  idQuestion: number;
  idAnswer: number;
}

// Define the SelectedOptionsUpdate interface
export interface SelectedOptionsUpdate {
  answersToUpdate: SelectedOption[];
}
