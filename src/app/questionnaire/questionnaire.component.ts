import { Component, OnInit } from '@angular/core';
import { Questionnaire } from "../models/Questionnaire";
import { Question } from "../models/Question";
import { ActivatedRoute } from "@angular/router";
import { QuestionnaireService } from "./questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  current: Questionnaire;
  currentQuestion: Question;
  currentQuestionIndex: number = 0;
  state: number = -1;

  saving: boolean = false;

  constructor(private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    this.state = -1;

    let surveyId = this.route.snapshot.paramMap.get('id');
    this.questionnaireService.getQuestionnaire(surveyId.toString(), "random-token")
      .subscribe(q => {
        if (q) {
          this.current = q;
          this.currentQuestionIndex = 0;
          this.currentQuestion = this.current.questions[this.currentQuestionIndex];
          this.state = 0;
        } else {
          this.current = null;
          this.state = 3;
        }
      });
  }

  public nextQuestion(response: number): void {
    if (this.currentQuestionIndex < this.current.questions.length) {
      this.current.questions[this.currentQuestionIndex].value = response.toString();
    }

    if (++this.currentQuestionIndex >= this.current.questions.length) {
      this.state = 2;
      this.saveData();
    } else {
      this.currentQuestion = this.current.questions[this.currentQuestionIndex];
    }
  }

  public getProgress(): string {
    return (100 * (this.currentQuestionIndex + 1) / this.current.questions.length) + '%';
  }

  protected saveData() {
    this.saving = true;
    this.questionnaireService.saveAnswers(this.current, "random-token").subscribe(
      result => {
        this.saving = false;
      }
    )
  }
}
