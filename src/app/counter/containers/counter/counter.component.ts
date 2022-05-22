import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  public count = 0;

  constructor() { }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  setCounter(amount: string) {
    this.count = +amount;
  }
}
