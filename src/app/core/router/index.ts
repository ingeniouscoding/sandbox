import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './custom-route-serializer';

const selectRouterFeature =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

const selectRouterState = createSelector(
  selectRouterFeature,
  (feature) => feature.state
);

export const selectRouterParamsId = createSelector(
  selectRouterState,
  (state) => state.params['id']
);
