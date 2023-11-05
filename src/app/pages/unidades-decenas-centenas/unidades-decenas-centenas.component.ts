import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-unidades-decenas-centenas',
  templateUrl: './unidades-decenas-centenas.component.html',
  styleUrls: ['./unidades-decenas-centenas.component.css']
})
export class UnidadesDecenasCentenasComponent {
    currentNumber!: number;
    correctCount = 0;
    incorrectCount = 0;
    totalRounds = 10;
    attempts = 0;
    message: string | null = null;
  
    constructor() {
      this.startNewGame();
    }
  
    generateNumber() {
      const numberType = Math.floor(Math.random() * 3);

      // Asigna un número aleatorio basado en el tipo
      if (numberType === 0) {
        // Unidad: 1 - 9
        this.currentNumber = Math.floor(Math.random() * 9) + 1;
      } else if (numberType === 1) {
        // Decena: 10 - 99
        this.currentNumber = Math.floor(Math.random() * 90) + 10;
      } else {
        // Centena: 100 - 999
        this.currentNumber = Math.floor(Math.random() * 900) + 100;
      }
  
      this.attempts++;
      this.message = null; // Reset the message
      if (this.attempts > this.totalRounds) {
        this.showResultModal();
      }
    }
  
    checkAnswer(unit: 'unidad' | 'decena' | 'centena') {
      if (this.attempts <= this.totalRounds) {
        if (
          (this.currentNumber < 10 && unit === 'unidad') ||
          (this.currentNumber >= 10 && this.currentNumber < 100 && unit === 'decena') ||
          (this.currentNumber >= 100 && unit === 'centena')
        ) {
          this.correctCount++;
          this.message = '¡Correcto!';
        } else {
          this.incorrectCount++;
          this.message = 'Incorrecto. Inténtalo de nuevo.';
        }
        if (this.attempts === this.totalRounds) {
          // Llamar a la función para mostrar el modal aquí después del delay
          setTimeout(() => {
            this.showResultModal();
          }, 2000);
        } else {
          // Generar un nuevo número después de un delay corto
          setTimeout(() => {
            this.generateNumber();
          }, 2000);
        }
      }
    }
  
    showResultModal() {
      const gameWon = this.correctCount >= 6;
      this.message = gameWon ? '¡Ganaste!' : 'Perdiste, intenta de nuevo.';
      $('#resultModal').modal('show');
    }
  
    startNewGame() {
      $('#resultModal').modal('hide');
      this.correctCount = 0;
      this.incorrectCount = 0;
      this.attempts = 0;
      this.generateNumber(); // Genera el primer número al comenzar un nuevo juego
    }
}
