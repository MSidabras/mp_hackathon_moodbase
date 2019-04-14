import { Injectable } from '@angular/core';
import { AbstractHttpService } from "../abstract-http-service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Team } from "../models/Team";
import { delay, map } from "rxjs/operators";
import { of } from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends AbstractHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  public getTeams(): Observable<Array<Team>> {
    return this.getMockTeams();
  }

  private getMockTeams(): Observable<Array<Team>> {
    let data = [
      { id: "1", value: "team-1", title: "Team 1" },
      { id: "2", value: "team-2", title: "Team 2" },
      { id: "3", value: "team-3", title: "Team 3" },
      { id: "4", value: "team-4", title: "Team 4" },
      { id: "5", value: "team-5", title: "Team 5" },
      { id: "6", value: "team-6", title: "Team 6" },
      { id: "7", value: "team-7", title: "Team 7" },
      { id: "8", value: "team-8", title: "Team 8" },
      { id: "9", value: "team-9", title: "Team 9" },
      { id: "10", value: "team-10", title: "Super Team 10" },
    ];

    return of(data).pipe(
      delay(2000),
      map(result => result.map(t => new Team(t)))
    );
  }
}
