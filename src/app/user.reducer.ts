import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  users: any[];
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
    error: null
  })),
  on(UserActions.loadUsersFailure, (state, action) => ({
    ...state,
    error: action.error
  }))
);
    