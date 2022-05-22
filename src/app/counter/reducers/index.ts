import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCounter from './counter.reducer';
import * as fromRoot from '@sandbox/reducers';

export const counterFeatureKey = 'counterFeature';

export interface CounterState {
  [fromCounter.counterFeatureKey]: fromCounter.State,
}

export interface State extends fromRoot.State {
  [counterFeatureKey]: CounterState,
}

export function reducer(state: CounterState | undefined, action: Action) {
  return combineReducers({
    [fromCounter.counterFeatureKey]: fromCounter.reducer,
  })(state, action);
}

export const selectCounterState = createFeatureSelector<CounterState>(counterFeatureKey);

export const selectCounterFeature = createSelector(
  selectCounterState,
  (state) => state[fromCounter.counterFeatureKey]
);

export const selectCounterValue = createSelector(
  selectCounterFeature,
  fromCounter.selectCounter
);

export const selectUpdatedAt = createSelector(
  selectCounterFeature,
  fromCounter.selectUpdatedAt
);
