import { createReducer, on } from "@ngrx/store";

import { CounterActions, UpdatedAtActions } from '../actions';

export const counterFeatureKey = 'counter';

export interface State {
  count: number;
  updatedAt: number | null;
}

const initialState: State = {
  count: 3,
  updatedAt: null,
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
  })),
  on(UpdatedAtActions.setUpdatedAt, (state, { currentTime }) => ({
    ...state,
    updatedAt: currentTime,
  }))
);

export const selectCounter = (state: State) => state.count;
export const selectUpdatedAt = (state: State) => state.updatedAt;
