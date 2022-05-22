import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCounter from './counter.reducer';
import * as fromRoot from '@sandbox/app.reducer';

export const counterFeatureKey = 'counterModule';

export interface CounterModuleState {
  [fromCounter.counterFeatureKey]: fromCounter.State,
}

export interface State extends fromRoot.State {
  [counterFeatureKey]: CounterModuleState,
}

export function reducer(state: CounterModuleState | undefined, action: Action) {
  return combineReducers({
    [fromCounter.counterFeatureKey]: fromCounter.reducer,
  })(state, action);
}

export const selectCounterFeature = createFeatureSelector<CounterModuleState>(counterFeatureKey);

export const selectCounterState = createSelector(
  selectCounterFeature,
  (state) => state.counter
);

export const selectCount = createSelector(
  selectCounterState,
  fromCounter.selectCounter
);

export const selectUpdatedAt = createSelector(
  selectCounterState,
  fromCounter.selectUpdatedAt
);
