import { Component } from '@angular/core';

@Component({
  selector: 'app-antecesor-sucesor',
  templateUrl: './antecesor-sucesor.component.html',
  styleUrls: ['./antecesor-sucesor.component.css']
})
export class AntecesorSucesorComponent {
  currentNumber!: number;
  predecessor!: number;
  successor!: number;

  constructor() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.currentNumber = Math.floor(Math.random() * 100) + 1;
  }

  checkAnswer() {
    if (this.predecessor === this.currentNumber - 1 && this.successor === this.currentNumber + 1) {
      alert('¡Correcto!');
      this.generateRandomNumber(); // Para generar un nuevo número después de una respuesta correcta.
    } else {
      alert('Inténtalo de nuevo.');
    }
  }
}
