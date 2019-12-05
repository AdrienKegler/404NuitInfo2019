import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  //score: Number = 0

  constructor() {
    if(!sessionStorage.getItem('score')){
      sessionStorage.setItem('score', '0');
    }
   }

  incrementScore() {
    let score = Number(sessionStorage.getItem('score')) + 1
    sessionStorage.setItem('score', score.toString())
    //this.score = score
    return score
  }

  getScore() {
    return Number(sessionStorage.getItem('score'))
  }
}
