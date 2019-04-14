import { Question } from "./Question";

export class Questionnaire {
  id: string;
  questions: Array<Question>;
  title?: string;
  description?: string;
  userToken?: string;
  image?: string;

  constructor(init?: Partial<Questionnaire>) {
    init && Object.assign(this, init);
  }
}
