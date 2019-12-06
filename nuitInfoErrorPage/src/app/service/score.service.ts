import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  score = 0;
  constructor() {
    if (localStorage.getItem('score')) {
      this.score = Number(localStorage.getItem('score'));
    }
  }

  incrementScore() {
    this.score++;
    localStorage.setItem('score', this.score.toString());
    return this.score;
  }

  getScore() {
    return this.score;
  }
}
