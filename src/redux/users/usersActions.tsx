import * as type from './usersTypes';

interface IAction<P> {
  type: string;
  payload?: P;
}

export const fetchUsersRequest = <P,>(data?: P): IAction<P> => ({
  type: type.FETCH_USERS_REQUEST,
  payload: data,
});

export const fetchUsersSuccess = <P,>(data: P): IAction<P> => ({
  type: type.FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersError = <P,>(data: P): IAction<P> => ({
  type: type.FETCH_USERS_ERROR,
  payload: data,
});

export const fetchMoreUsersSuccess = <P,>(data: P): IAction<P> => ({
  type: type.FETCH_MORE_USERS_SUCCESS,
  payload: data,
});

