import { Component } from '@angular/core';
import { ScoreService } from './service/score.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private scoreService: ScoreService) {}
}
