export interface Step {
  id: string;
  question: string;
  answers: string[];
  showIfId: string;
  showIfValue: string;
  message?: string;
  end?: boolean;
}
