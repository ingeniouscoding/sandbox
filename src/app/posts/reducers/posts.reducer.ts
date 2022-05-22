import { createReducer, on } from "@ngrx/store";
import { PostsApiActions } from "../actions";

import { Post } from "../models/post.model";

export const postsFeatureKey = 'posts';

export interface State {
  posts: Post[];
}

const initialState: State = {
  posts: [],
};

export const reducer = createReducer(
  initialState,
  on(PostsApiActions.loadSuccess, (state, { posts }) => ({
    ...state,
    posts,
  })),
  on(PostsApiActions.createSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
  }))
);
