import { Component } from '@angular/core';
import { ScoreService } from './service/score.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  scoreCount: Number

  constructor(private scoreService: ScoreService){
    this.scoreCount = this.scoreService.getScore()
  }

  increment(){
    this.scoreCount = this.scoreService.incrementScore()
  }

  title = 'nuitInfoErrorPage';


}
