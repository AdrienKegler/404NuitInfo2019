import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  //score: Number = 0

  constructor() {
    if(!localStorage.getItem('score')){
      localStorage.setItem('score', '0');
    }
   }

  incrementScore() {
    let score = Number(localStorage.getItem('score')) + 1
    localStorage.setItem('score', score.toString())
    //this.score = score
    return score
  }

  getScore() {
    return Number(localStorage.getItem('score'))
  }
}
