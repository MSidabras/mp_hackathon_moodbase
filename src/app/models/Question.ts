
export class Question {
  id: number;
  title: string;
  description: string;
  value: string;

  constructor(init?: Partial<Question>) {
    init && Object.assign(this, init);
  }
}
