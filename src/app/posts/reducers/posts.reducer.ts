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
  })),

  on(PostsApiActions.updateSuccess, (state, { post }) => ({
    ...state,
    posts: state.posts.map((p) => p.id === post.id ? post : p)
  })),

  on(PostsApiActions.deleteSuccess, (state, { id }) => ({
    ...state,
    posts: state.posts.filter((p) => p.id !== id)
  }))
);
