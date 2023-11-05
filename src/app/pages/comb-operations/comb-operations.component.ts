import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../components/snack-bar/snack-bar.component";

@Component({
  selector: 'app-comb-operations',
  templateUrl: './comb-operations.component.html',
  styleUrls: ['./comb-operations.component.css']
})
export class CombOperationsComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  operations: string[] = ['+', '-', 'x', '%'];
  operation: string = '+';
  inputValue: number = 0;
  isCorrect: boolean = false;
  digitsQuantity: number = 2;


  constructor(private _snackBar: MatSnackBar) {


    this.setDigits(this.digitsQuantity)

    this.operation = this.operations[Math.floor(Math.random() * this.operations.length)];
    if(this.operation === '+'){
      this.result = this.firstNumber + this.secondNumber;
    }
    else if(this.operation === '-'){
      this.result = this.firstNumber - this.secondNumber;
    }
    else if(this.operation === 'x'){
      this.result = this.firstNumber * this.secondNumber;
    }
    else if(this.operation === '%'){
      this.result = Math.round(this.firstNumber / this.secondNumber);
      console.log("Division")
      this.result = parseFloat(this.result.toFixed(2))
      console.log(this.result)
    }
    console.log(this.result)
  }

  setOperation(operation: string) {
    console.log("Set operation")

    this.operation = operation;
    if(this.operation === '+'){
      this.result = this.firstNumber + this.secondNumber;
    }
    else if(this.operation === '-'){
      this.result = this.firstNumber - this.secondNumber;
    }
    else if(this.operation === 'x'){
      this.result = this.firstNumber * this.secondNumber;
    }
    else if(this.operation === '%'){
      this.result = Math.round(this.firstNumber / this.secondNumber);
      console.log("Division")
    }
    console.log(this.result)

  }

  handleButtonClick() {
    this.setDigits(this.digitsQuantity)


    this.operation = this.operations[Math.floor(Math.random() * this.operations.length)];
    if(this.operation === '+'){
      this.result = this.firstNumber + this.secondNumber;
    }
    else if(this.operation === '-'){
      this.result = this.firstNumber - this.secondNumber;
    }
    else if(this.operation === 'x'){
      this.result = this.firstNumber * this.secondNumber;
    }
    else if(this.operation === '%'){
      this.result = this.firstNumber / this.secondNumber;
      console.log("Division")
      this.result = parseFloat(this.result.toFixed(2))

      console.log(this.result)
    }
    this.inputValue = 0;
    console.log("Resultadi")
    console.log(this.result)
  }

  openSnackBar() {
    console.log(this.result, this.inputValue)
    this.isCorrect = this.result == this.inputValue;
    console.log(this.isCorrect)
    if (this.isCorrect) {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 10 * 1000,
        data: { myMessage: "Correcta" }
      });
      this.handleButtonClick()
    }
    else {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 10 * 1000,
        data: { myMessage: "Incorrecta" }
      });
    }
  }

  setDigits(digits: number) {
    this.digitsQuantity = digits;
    if (this.digitsQuantity === 1) {
      this.firstNumber = Math.floor(Math.random() * (9 - 1 + 1) + 1);
      this.secondNumber = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    }
    else if (this.digitsQuantity === 2) {
      this.firstNumber = Math.floor(Math.random() * (99 - 10 + 1) + 10);
      this.secondNumber = Math.floor(Math.random() * (99 - 10 + 1) + 10);
    }
    else if (this.digitsQuantity === 3) {
      this.firstNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      this.secondNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
    this.setOperation(this.operation)
  }


  openDialog() {
    window.open("https://www.youtube.com/watch?v=w016sdtyv1w", "_blank")
  }
}
