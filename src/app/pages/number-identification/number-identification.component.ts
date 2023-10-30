import { Component } from '@angular/core';

@Component({
  selector: 'app-number-identification',
  templateUrl: './number-identification.component.html',
  styleUrls: ['./number-identification.component.css']
})
export class NumberIdentificationComponent {
  maxApples = 10;
  apples: number[] = [];
  userInput: number | undefined;

  constructor() {
    this.generateRandomApples();
  }

  generateRandomApples() {
    const randomNumber = Math.floor(Math.random() * (this.maxApples + 1));
    this.apples = Array(randomNumber).fill(0);
  }

  checkAnswer() {
    if (this.userInput === this.apples.length) {
      alert('¡Correcto!');
      this.generateRandomApples();
    } else {
      alert('Inténtalo de nuevo.');
    }
  }
}
