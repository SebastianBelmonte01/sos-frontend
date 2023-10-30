import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recta-numerica',
  templateUrl: './recta-numerica.component.html',
  styleUrls: ['./recta-numerica.component.css']
})
export class RectaNumericaComponent implements OnInit {
  numbers: number[] = Array.from({length: 10}, (_, i) => i);
  randomNumber: number = this.generateRandomNumber() ;
  isHovered: boolean = false;
  hoveredNumber: number | null = null;
  feedbackVisible: boolean = false;
  feedbackMessage: string = "";
  isCorrect: boolean = false;


  ngOnInit(): void {}

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

  showNumber(number: number) {
    this.isHovered = true;
    this.hoveredNumber = number;
  }

  hideNumber() {
    this.isHovered = false;
    this.hoveredNumber = null;
  }

  checkNumber(number: number) {
    if (number === this.randomNumber) {
      this.feedbackMessage = "¡Correcto!";
      this.isCorrect = true;  // Añade esta línea
      this.feedbackVisible = true;
      setTimeout(() => {
        this.randomNumber = this.generateRandomNumber();
        this.feedbackVisible = false;
      }, 2000);
    } else {
      this.feedbackMessage = "Inténtalo de nuevo.";
      this.isCorrect = false;  // Añade esta línea
      this.feedbackVisible = true;
      setTimeout(() => {
        this.feedbackVisible = false;
      }, 2000);
    }
  }
  
}
