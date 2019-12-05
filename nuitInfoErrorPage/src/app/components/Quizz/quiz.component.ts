import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() question: Question = {
    question: 'Comment est votre blanquette ?',
    answers: [
      {
        text: 'Elle est très bonne merci',
        valid: true
      },
      {
        text: 'Ma quoi ?'
      },
      {
        text: 'Trop chère.'
      },
      {
        text: 'Froide.'
      }
    ]
  };

  constructor() {
  }

  verify(valid?: boolean) {
    valid ? this.correctAnswer() : this.wrongAnswer();
  }

  correctAnswer() {
    console.log('correctAnswer');
  }

  wrongAnswer() {
    console.log('wrongAnswer');
  }

  ngOnInit(): void {
    this.question.answers = this.shuffle(this.question.answers);
    this.question.answers.forEach(item => item.color = this.getRandomColor());
  }

  shuffle(a: Answer[]): any {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  lightOrDark(color) {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return 'light';
    } else {

      return 'dark';
    }
  }

}


interface Answer {
  text: string;
  valid?: boolean;
  color?: string;
}

interface Question {
  question: string;
  answers: [Answer, Answer, Answer, Answer];
}

