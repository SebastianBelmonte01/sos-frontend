import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidades-decenas-centenas',
  templateUrl: './unidades-decenas-centenas.component.html',
  styleUrls: ['./unidades-decenas-centenas.component.css']
})
export class UnidadesDecenasCentenasComponent implements OnInit{
    currentNumber!: number;
    feedbackMessage!: string;

    constructor() { }

    ngOnInit(): void {
        this.generateNumber();
    }

    generateNumber(): void {
        this.currentNumber = Math.floor(Math.random() * 1000);
        this.feedbackMessage = '';
    }

    checkAnswer(answer: string): void {
        if ((this.currentNumber < 10 && answer === 'unidad') ||
            (this.currentNumber >= 10 && this.currentNumber < 100 && answer === 'decena') ||
            (this.currentNumber >= 100 && answer === 'centena')) {
            this.feedbackMessage = '¡Correcto!';
            this.generateNumber();
        } else {
            this.feedbackMessage = 'Inténtalo de nuevo.';
        }
    }
}
