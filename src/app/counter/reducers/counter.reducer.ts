import { createReducer, on } from "@ngrx/store";

import { CounterActions } from '../actions';

export const counterFeatureKey = 'counter';

export interface State {
  count: number;
}

const initialState: State = {
  count: 3,
};

export const reducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterActions.setCounter, (state, { value }) => ({
    ...state,
    count: value,
  }))
);

export const selectCounter = (state: State) => state.count;
