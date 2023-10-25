import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../components/snack-bar/snack-bar.component";

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

  constructor(private _snackBar: MatSnackBar) {
    this.firstNumber = Math.floor(Math.random() * (999 - 10 + 1) + 10);
    this.secondNumber = Math.floor(Math.random() * (999 - 10 + 1) + 10);
    this.operation = this.operations[Math.floor(Math.random() * this.operations.length)];
    this.result = this.operation === '+' ? this.firstNumber + this.secondNumber : this.firstNumber - this.secondNumber;
    console.log(this.result)

  }

  handleButtonClick() {
    this.firstNumber = Math.floor(Math.random() * (999 - 10 + 1) + 10);
    this.secondNumber = Math.floor(Math.random() * (999 - 10 + 1) + 10);
    this.operation = this.operations[Math.floor(Math.random() * this.operations.length)];
    this.result = this.operation === '+' ? this.firstNumber + this.secondNumber : this.firstNumber - this.secondNumber;
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

}
