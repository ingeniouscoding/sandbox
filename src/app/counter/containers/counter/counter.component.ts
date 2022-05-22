import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterActions } from '@sandbox/counter/actions';
import * as fromCounter from '@sandbox/counter/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  public count$ = this.store.select(fromCounter.selectCounterValue);

  constructor(private store: Store) { }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  setCounter(newValue: string) {
    let value = +newValue;
    this.store.dispatch(CounterActions.setCounter({ value }));
  }
}
