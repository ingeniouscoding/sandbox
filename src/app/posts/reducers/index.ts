
import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '@sandbox/app.reducer';
import * as fromPosts from './posts.reducer';

export const postsFeatureKey = 'postsModule';

export interface PostModuleState {
  [fromPosts.postsFeatureKey]: fromPosts.State,
}

export interface State extends fromRoot.State {
  [postsFeatureKey]: PostModuleState,
}

export function reducer(state: PostModuleState | undefined, action: Action) {
  return combineReducers({
    [fromPosts.postsFeatureKey]: fromPosts.reducer,
  })(state, action);
}

export const selectPostsFeature = createFeatureSelector<PostModuleState>(postsFeatureKey);

export const selectPostsState = createSelector(
  selectPostsFeature,
  (state) => state.posts
);

export const selectPosts = createSelector(
  selectPostsState,
  (state) => state.posts
);
