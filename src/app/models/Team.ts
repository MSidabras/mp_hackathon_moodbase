
export class Team {
  id: string;
  title: string;

  constructor(init?: Partial<Team>) {
    init && Object.assign(this, init);
  }
}
