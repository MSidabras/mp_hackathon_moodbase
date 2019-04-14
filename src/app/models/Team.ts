
export class Team {
  id?: string;
  value: string;
  title: string;

  constructor(init?: Partial<Team>) {
    init && Object.assign(this, init);
  }
}
