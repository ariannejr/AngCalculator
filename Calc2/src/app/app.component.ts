import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calc2';

  firstNumber = 0;
  secondNumber = 0;

  answer = 0;

  getfirstNumber(value: string) {
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt))
    {
      this.firstNumber = parsedInt;
      console.log(this.firstNumber);
    }
  }

  
  getsecondNumber(value: string) {
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt))
    {
      this.secondNumber = parsedInt;
      console.log(this.secondNumber);
    }
  }

  onAdd()
  {
    this.answer = this.firstNumber + this.secondNumber;
  }

  onSub()
  {
    this.answer = this.firstNumber - this.secondNumber;
  }

  onMulti()
  {
    this.answer = this.firstNumber * this.secondNumber;
  }

  onDiv()
  {
    this.answer = this.firstNumber / this.secondNumber;
  }

  getAnswer()
  {
    return this.answer;
  }

}
