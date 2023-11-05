import { Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-number-identification',
  templateUrl: './number-identification.component.html',
  styleUrls: ['./number-identification.component.css']
})
export class NumberIdentificationComponent {
  maxApples = 10;
  apples: number[] = [];
  userInput: number | undefined;
  correctCount = 0;
  incorrectCount = 0;
  message: string | null = null;
  totalChances = 10;
  attempts = 0;
  resultMessage: string | null = null;
  

  constructor() {
    this.startNewGame();
  }

  generateRandomApples() {
    const randomNumber = Math.floor(Math.random() * (this.maxApples + 1));
    this.apples = Array(randomNumber).fill(0);
  }

  checkAnswer() {
    if (this.attempts < this.totalChances) {
      this.attempts++;
      if (this.userInput === this.apples.length) {
        this.correctCount++;
        this.message = '¡Correcto!';
        this.userInput = undefined;
      } else {
        this.incorrectCount++;
        this.message = 'Incorrecto. Inténtalo de nuevo.';
        this.userInput = undefined;

      }
      setTimeout(() => this.message = null, 2000);  // Oculta el mensaje después de 2 segundos
      this.evaluateGame();
      this.generateRandomApples();
    }
  }

  evaluateGame() {
    if (this.attempts === this.totalChances) {
      const gameWon = this.correctCount >= 6;
      this.resultMessage = gameWon ? '¡Ganaste!' : 'Perdiste, intenta de nuevo.';
      // Llamar a la función para mostrar el modal aquí después del delay
      setTimeout(() => {
        this.showResultModal();
      }, 2000);
    }
  }
  showResultModal() {
    // Aquí debes integrar el código para abrir el modal
    // Si estás utilizando jQuery con Bootstrap:
    $('#resultModal').modal('show');

    // Si estás utilizando ng-bootstrap u otra librería angular para Bootstrap, sigue su documentación para abrir modales.
  }

  startNewGame() {
    $('#resultModal').modal('hide');
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.attempts = 0;
    this.userInput = undefined;
    this.generateRandomApples();
  }
}
