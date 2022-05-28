import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '@sandbox/app.reducer';
import * as fromRouter from '@sandbox/core/router';
import * as fromPosts from './posts.reducer';

export const postsFeatureKey = 'postsModule';

export interface PostModuleState {
  [fromPosts.postsFeatureKey]: fromPosts.State,
}

export interface State extends fromRoot.State {
  [postsFeatureKey]: PostModuleState,
}

export function reducers(state: PostModuleState | undefined, action: Action) {
  return combineReducers({
    [fromPosts.postsFeatureKey]: fromPosts.reducer,
  })(state, action);
}

const selectPostsFeature =
  createFeatureSelector<PostModuleState>(postsFeatureKey);

const selectPostsState = createSelector(
  selectPostsFeature,
  (feature) => feature.posts
);

export const selectPosts = createSelector(
  selectPostsState,
  (state) => state.posts
);

export const selectPostById = createSelector(
  selectPosts,
  fromRouter.selectRouterParamsId,
  (posts, id) => posts.find(p => p.id == id)
);
