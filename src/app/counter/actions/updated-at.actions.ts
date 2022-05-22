import { createAction, props } from "@ngrx/store";

export const setUpdatedAt = createAction(
  '[Counter] Set updated at',
  props<{ currentTime: number; }>()
);
