import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../components/snack-bar/snack-bar.component";
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-basic-operations',
  templateUrl: './basic-operations.component.html',
  styleUrls: ['./basic-operations.component.css']
})
export class BasicOperationsComponent{
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  operations: string[] = ['+', '-'];
  operation: string = '+';
  inputValue: number = 0;
  isCorrect: boolean = false;
  digitsQuantity: number = 2;

  constructor(private _snackBar: MatSnackBar) {
   this.setDigits(this.digitsQuantity)
    this.result = this.operation === '+' ? this.firstNumber + this.secondNumber : this.firstNumber - this.secondNumber;
  }

  handleButtonClick() {
    this.setDigits(this.digitsQuantity)
    this.operation = this.operations[Math.floor(Math.random() * this.operations.length)];
    this.result = this.operation === '+' ? this.firstNumber + this.secondNumber : this.firstNumber - this.secondNumber;
    this.inputValue = 0;
    console.log("Resultado")
    console.log(this.result)
  }

  openSnackBar() {
    this.isCorrect = this.result == this.inputValue;
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

  setOperation(operation: string) {
    this.operation = operation;
    this.result = this.operation === '+' ? this.firstNumber + this.secondNumber : this.firstNumber - this.secondNumber;
    console.log(this.result)
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
     window.open("https://www.youtube.com/watch?v=SRPkdB0vJzU", "_blank")
  }



}
