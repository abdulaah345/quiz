import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User List] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: any[] }>());
export const loadUsersFailure = createAction('[User List] Load Users Failure', props<{ error: any }>());
